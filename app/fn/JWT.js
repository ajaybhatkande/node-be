/**
 * JWT.js
 * @source      :: https://thesabbir.com/how-to-use-json-web-token-authentication-with-sails-js/ 
 *                 https://scotch.io/tutorials/the-anatomy-of-a-json-web-token
 * @description :: JSON Webtoken Service for sails
 * @help        :: See https://github.com/auth0/node-jsonwebtoken & http://sailsjs.org/#!/documentation/concepts/Services
 */

var jwt = require('jsonwebtoken');
var tokenSecret = "DMAVI2WEB1234567890";

exports.issue = function (payload) {
  return jwt.sign(
    payload,
    tokenSecret, // Token Secret that we sign it with 
    {
      algorithm: 'HS256',
      expiresIn: '15h'
    }
  );
};

exports.verify = function (token, callback) {
  return jwt.verify(
    token, // The token to be verified
    tokenSecret, // Same token we used to sign
    {}, // No Option, for more see https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
    callback //Pass errors or decoded token to callback
  );
};

exports.getPayload = function (token) {
  return new Promise(function (resolve, reject) {
    jwt.verify(token, tokenSecret, function (err, decodedUser) {
      if (err) {
        reject(err);
      } else {
        resolve(decodedUser);
      }
    });
  })
};