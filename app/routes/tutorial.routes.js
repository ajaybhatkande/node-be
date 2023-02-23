module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial // 1. API Call
  console.log("1.Routs Called");
  router.post("/create", tutorials.create);
  router.post("/emp/create", tutorials.createEmp);

  // create product API (Route url or api URl or url path----------------------------------)

  //-----method-----url----------controller.fuction---------
  router.post("/product/create", tutorials.createProductControllerFunction);


  router.post("/college/create", tutorials.createcollegeControllerFunction);



  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);

  app.use('/api/', router);
};
