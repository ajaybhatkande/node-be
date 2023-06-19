
module.exports = app => {
    const logical = require("../controllers/logical.controller.js");
    var router = require("express").Router();

    console.log("Logical Routs Called");
    router.post("/create", logical.create);

    app.use('/api/logical', router);
}