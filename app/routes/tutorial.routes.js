module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial // 1. API Call
  console.log("Tutorials Routs Called");
  router.post("/create", tutorials.create);
  router.post("/emp/create", tutorials.createEmp);

  // create product API (Route url or api URl or url path----------------------------------)

  //-----method-----url----------controller.fuction---------
  router.post("/product/create", tutorials.createProductControllerFunction);


  // router.post("/college/create", tutorials.createcollegeControllerFunction);


  //create school API (Rout url or api URl or url path)
  router.post("/school/create", tutorials.createschoolControllerFunction);


  router.post("/student/create", tutorials.createstudentControllerFunction);

//addition api...........................................................
  router.post("/program/addition", tutorials.additionFunction);

  //create addion api................................................
  router.post("/program/additionOfThreeNumber", tutorials.additionOfThreeNumberFunction);

  //Create multipication api...............................................

  router.post("/program/multiplication", tutorials.multiplicationOfTwoNumberFunction);

  //Substraction api.......................................................
  router.post("/program/subscibtion", tutorials.subscibtionFunction);

  //Prime number api.......................................................
  router.post("/program/primeNumber", tutorials.PrimeNumberFunction);

  //reverse number..........................................................

  router.post("/program/reverseno", tutorials.reversenumberFunction);

  //even odd number pgm........................................................
  router.post("/program/evenoddnumber", tutorials.evenoddnumberFunction);

  //Text api.....................................................................
  router.post("/program/text", tutorials.textFunction);

  //palindrom api..................................................................
  router.post("/program/palindrome", tutorials.palindromeFunction);


//fiboncci api.........................................................
  router.post("/program/fibonacci", tutorials.fibonacciFunction);

//Armstrong api......................................................................
router.post("/program/Armstrong", tutorials.ArmstrongFunction);

//factorial number api..............................................................
router.post("/program/factorial", tutorials.factorialFunction);

//perfect number api................................................................
router.post("/program/perfectNumber", tutorials.perfectNumberFunction);


//Area of circle api..................................................................
router.post("/program/areaofcircle", tutorials.areaofcircleFunction);

//Area of triangle api.................................................................
router.post("/program/areaoftriangle", tutorials.ariaoftriangleFunction);
 


//simple interest api.................................................................
router.post("/program/simpleinterest", tutorials.simpleinterestFunction);
 



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
