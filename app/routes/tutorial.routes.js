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

  router.post("/user1/create", tutorials.createuser1ControllerFunction);

//create hospital......................................................................
  router.post("/Hospital/create", tutorials.createHospitalControllerFunction);

//patient creat..........................................................................
  router.post("/patient2/create", tutorials.createpatient2ControllerFunction);

  //find patient.........................................................
  router.post("/patient2/get", tutorials.findAllpatient2);

  
  // Update a patient id.................................
  router.put("/patient2/:id", tutorials.updatepatient2);

   // Delete a patient with id
   router.get("/patient2/delete/:id", tutorials.deletepatient2);

//create doctor......................................................................
router.post("/doctor/create", tutorials.createdoctorControllerFunction);

//create employee......................................................................
router.post("/employee/create", tutorials.createemployeeControllerFunction);

//create patient......................................................................
router.post("/patient/create", tutorials.createpatientControllerFunction);

//create task......................................................................
router.post("/task/create", tutorials.createtaskControllerFunction);


//find doctor........................................................................
router.post("/doctor/get", tutorials.findAlldoctor);

//find employee ........................................................................
router.post("/employee/get", tutorials.findAllemployee);

//find patient.....................................................................
router.post("/patient/get", tutorials.findAllpatient);

//find task........................................................................
router.post("/task/get", tutorials.findAlltask);

  // Update a Tutorial with doctor id..............................................
  router.put("/doctor/:id", tutorials.updatedoctor);

  // Update a Tutorial with employe id..............................................
  router.put("/employee/:id", tutorials.updateemployee);

 // Update a Tutorial with patient id..............................................
 router.put("/patient/:id", tutorials.updatepatient);

 // Update a Tutorial with task id..............................................
 router.put("/task/:id", tutorials.updatetask);


  // Delete a Tutorial with doctor id.............................................
  router.get("/doctor/delete/:id", tutorials.deletedoctor);


  // Delete a Tutorial with employee id..............................................
  router.get("/employee/delete/:id", tutorials.deleteemployee);

 // Delete a Tutorial with patient id................................................
 router.get("/patient/delete/:id", tutorials.deletepatient);

 // Delete a Tutorial with task id...................................................
 router.get("/task/delete/:id", tutorials.deletetask);





  // Retrieve all Tutorials
  router.post("/hospital/get", tutorials.findAll);



  router.post("/student/get", tutorials.findAllstudent);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);



 //error first callback....................................
 router.post("/file/post", tutorials.fileErrorFirstCallback);

//listitems.....................................................
router.post("/listitems/post", tutorials.listitems);

  // Update a Tutorial with id
  router.put("/student/:id", tutorials.updatestudent);

  // Delete a Tutorial with id
  router.get("/student/delete/:id", tutorials.deletestudent);

 // promises..................................................
  router.post("/promises/post", tutorials.promises);

  // promises..................................................
  router.post("/promises2/post", tutorials.promises2);

    // promises..................................................
    router.post("/number/post", tutorials.number);

    


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
