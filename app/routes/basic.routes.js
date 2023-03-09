
module.exports = app => {
    const basicController = require("../controllers/basic.controller.js");
    var router = require("express").Router();

    console.log("Basic Routs Called");
    router.post("/createarray", basicController.createArray);

    router.post("/createforloop", basicController.createforloop);

    router.post("/datatype", basicController.datatype);

    router.post("/ifcondition", basicController.ifcondition);
    
    router.post("/dowhile", basicController.dowhile);

    // router base path
    app.use('/api/basic', router);



}