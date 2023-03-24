const Tutorial = require("../models/tutorial.model");

// Create and Save a new Tutorial 2. Create Controller function call
exports.create = (req, res) => {
  console.log("2.badam Create Controller Function Called");
  console.log("3.Request Controller Body Paramiters ", req.body);
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a product Tutorial
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false
  });

  // Save Tutorial in the database
  Tutorial.create(tutorial, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};

// Create Product Controller function---------------------------
exports.createProductControllerFunction = (req, res) => {
  console.log("1.create product controller function.."); // log to check on terminal
  console.log("postmen request req.body.", req.body); // log to check on terminal

  // Create a product json object
  const product = {
    productname: req.body.productname,
    country: req.body.country
  };

  // calling to product model function
  console.log("2. Calling to create product model function..");
  //modle.modelfunction
  Tutorial.createProductModelFuction(product, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};

//Create school Controller function---------------------------
exports.createschoolControllerFunction = (req, res) => {
  console.log("1.creat school controller function.."); // log to check on terminal
  console.log("postmen request req.body.", req.body); // log to check on terminal
  // Create aschool json object
  const school = {
    schoolname: req.body.schoolname,
    schooladdress: req.body.schooladdress
  };
  // calling to schoolmodel function
  console.log("2.Calling to create: school  model function..");
  //modle.modelfunction
  Tutorial.createschoolControllerFunction(school, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};

//Create student Controller function---------------------------
exports.createstudentControllerFunction = (req, res) => {
  console.log("1.creat student controller function.."); // log to check on terminal
  console.log("postmen request req.body.", req.body); // log to check on terminal
  // Create a student json object..........................................
  const student = {
    studentname: req.body.studentname,
    studentaddress: req.body.studentaddress
  };

  console.log("testing studant object", student);
  // calling to studentr model function.......................................
  console.log("2.Calling to create: student model function..");
  console.log("3calling student model");
  //modle.modelfunction
  Tutorial.createstudentmodelFunction(student, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};

/// Start: 1. Addtion of three no number program --------------
exports.additionFunction = (req, res) => {
  console.log("inside addition Function...");

  // addition logic
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const sum = num1 + num2;
  console.log("sum.", sum);

  // responce to postman
  res.send({
    total: sum
  });

}
//End :---------------------------------------------------------

//start:-------------------------------------------------------
exports.additionOfThreeNumberFunction = (req, res) => {
  console.log("Inside Addition Function...", req.body);

  //Addition logic..............................................
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const num3 = parseInt(req.body.num3);
  const sum = num1 + num2 + num3
  console.log("sum.", sum);

  //Responce To Postman.........................................
  res.send({
    total: sum
  });
}
//End: -------------------------------------------------------------

//start.............................................................
exports.multiplicationOfTwoNumberFunction = (req, res) => {
  console.log("Inside Multiplication Function...", req.body);

  //multiplication logic............................................
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const sum = num1 * num2
  console.log("sum.", sum);
  //Responce To Postman.........................................
  res.send({
    total: sum
  });
}
//End............................................................

// start:-------------------------------------------------------
exports.subscibtionFunction = (req, res) => {
  console.log("Inside subscibtion Function...", req.body);
  // subscibtion logic...........................................
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  console.log("num2.", num2);
  const sub = num1 - num2;
  console.log("sub.", sub);
  //Responce To Postman.........................................
  res.send({
    "result": sub
  });
}
//End...........................................................

//program to check if a number is prime or not..................
exports.PrimeNumberFunction = (req, res) => {
  console.log("Inside prime Function...", req.body);

  // take input from the user...................................
  const number = parseInt(req.body.num1);
  let isPrime = true;
  // check if number is equal to 1...............................
  if (number === 1) {
    console.log("1 is neither prime nor composite number.");
    res.send({
      massage: "1 is neither prime nor composite number."
    });
  }
  // check if number is greater than 1........................
  else if (number > 1) {
    // looping through 2 to number-1..........................
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number} is a prime number`);
      res.send({
        massage: `${number} is a prime number`
      });
    } else {
      res.send({
        massage: `${number} is a not prime number`
      });
    }
  }
  // check if number is less than 1..............................
  else {
    console.log("The number is not a prime number.");
    res.send({
      massage: "The number is not a prime number."
    });
  }

}
//End..................................................................

// program to check if the string is reversenumber..................
exports.reversenumberFunction = (req, res) => {//start bracket
  console.log("Inside check reversenumber Function...", req.body);

  //logic ofreverse number..........................................
  let number = parseInt(req.body.num1);
  // Initializing the result variable.................................
  let result = 0;
  while (number > 0) {
    // Getting the rightmost digit...................................
    rightmost = number % 10;
    result = result * 10 + rightmost;
    // Removing the rightmost digit from the number....................
    number = Math.floor(number / 10);
  }
  console.log("Reversed number is : " + result)

  res.send({
    "result": result
  });

}
//end..................................................................

//even odd number....................................................
exports.evenoddnumberFunction = (req, res) => {
  console.log("Inside check evenoddnumber Function...", req.body);
  // take input from the user........................................
  const number = parseInt(req.body.num1)
  //check if the number is even.......................................
  if (number % 2 == 0) {

    console.log("The number is even.");
    res.send({
      message: "this no is even"
    });
  }
  // if the number is odd..............................................
  else {
    console.log("The number is odd.");
    res.send({
      message: "this no is odd"
    });
  }
}

//test fuction program.....................................................
exports.textFunction = (req, res) => {
  console.log("Inside  text Function...", req.body);

  const num1 = parseInt(req.body.firstName);
  const num2 = parseInt(req.body.lastName);
  const num3 = parseInt(req.body.contactNo);
  const num4 = parseInt(req.body.email);
  const num5 = parseInt(req.body.address);

  console.log("The number.");

  res.send(
    req.body
  );
}

// program to check if the string is palindrome or not.......................
exports.palindromeFunction = (req, res) => {
  console.log("Inside palindromeFunction...", req.body);
  const stringText = req.body.text;
  // find the length of a string..............................................
  const len = stringText.length;
  // loop through half of the string............................................
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same.................................
    if (stringText[i] !== stringText[len - 1 - i]) {
      res.send({
        "result": "This string is not palendrom"
      });
    }
  }
  res.send({
    "result": "This string is palendrom"
  });
}

//fibonacci program...........................................................
exports.fibonacciFunction = (req, res) => {
  console.log("Inside fibonacci Function...", req.body);
  //take input from the user..................................................
  const number = parseInt(req.body.value);
  let n1 = 0, n2 = 1, nextTerm;
  console.log('Fibonacci Series:');

  let arr = [];
  for (let i = 1; i <= number; i++) {
    console.log(n1);
    arr.push(n1)
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }

  res.send({
    "result": arr
  });

}

//Armstrong number program..........................................
exports.ArmstrongFunction = (req, res) => {
  console.log("Inside Armstrong Function...", req.body);
  const number = parseInt(req.body.num)
  let sum = 0;
  // create a temporary variable......................................
  let temp = number;
  while (temp > 0) {
    // finding the one's digit.......................................
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    // removing last digit from the number............................
    temp = parseInt(temp / 10); // convert float into integer.........
  }
  // check the condition..............................................
  if (sum == number) {
    res.send({
      "result": "This number Armstronf "
    });
  }
  else {
    res.send({
      "result": "This number is not armstrong"
    });
  }
}


//factorial number program.........................................

exports.factorialFunction = (req, res) => {
  console.log("Inside factorial Function...", req.body);
  const number = parseInt(req.body.num)

  // checking if number is negative
  if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
    res.send({
      "result": "factorial number is negative"
    });
  }

  // if number is 0
  else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
    res.send({
      "result": `The factorial of ${number} is 1.`
    });
  }
  // if number is positive
  else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
      fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
    res.send({
      "result": `The factorial of ${number} is ${fact}.`
    });
  }

}


//perfect number program.............................................
exports.perfectNumberFunction = (req, res) => {
  console.log("Inside perfectNumber Function...", req.body);
  var flag, number, remainder, addition = 0, i;
  number = parseInt(req.body.num)
  flag = number;
  for (i = 0; i < number; i++) {
    remainder = number % i;
    if (remainder == 0) {
      addition += i;
    }
  }
  if (addition == flag) {
    res.send({
      "result": `-The inputed number is Perfect`
    });
  }
  else {
    res.send({
      "result": `The inputed number is not Perfect`
    });
  }
}



//Area of circle program.............................................
exports.areaofcircleFunction = (req, res) => {
  console.log("Inside areaofcircle Function...", req.body);
  let pi = 3.14159265358979323846;
  let radius = req.body.area;
  // area method.
  var aria = pi * radius * radius;

  res.send({
    "result": aria
  });
}



//Area of triangle program.............................................
exports.ariaoftriangleFunction = (req, res) => {
  console.log("Inside aria of triangle Function...", req.body);

  var side_a = parseInt(req.body.side1);
  var side_b = parseInt(req.body.side2);
  var side_c = parseInt(req.body.side3);
  var perimeter = (side_a + side_b + side_c) / 2;
  var area = Math.sqrt(perimeter * ((perimeter - side_a) * (perimeter - side_b) * (perimeter - side_c)));
  console.log("Area of triangle: " + (area).toFixed(2));

  res.send({
    "result": area
  });
}


//simple interest program..............................................
exports.simpleinterestFunction = (req, res) => {
  console.log("Inside simple interest Function...", req.body);


  // It will calculate the simple interest
  var p = parseInt(req.body.valu1);
  var t = parseInt(req.body.valu2);
  var r = parseInt(req.body.valu3);
  var simpleinterst = (p * t * r) / 100;

  res.send({
    "result": simpleinterst
  });



}


//Create user Controller function---------------------------
exports.createuser1ControllerFunction = (req, res) => {
  console.log("1.creat user1 controller function.."); // log to check on terminal
  console.log("postmen request req.body.", req.body); // log to check on terminal

  const user1 = {
    userName: req.body.userName,
    UserLastname: req.body.userlastname,
    UserAddress: req.body.UserAddress,
    userMobileNo: req.body.userMobileNo,
    userEmailId: req.body.userEmailId
  };

  console.log("testing user1 object", user1);
  // calling to user model function.......................................
  console.log("2.Calling to create: user1 model function..");
  console.log("3.calling user1 model");
  //modle.modelfunction
  Tutorial.createuser1modelFunction(user1, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};



//Create user Controller function---------------------------
exports.createHospitalControllerFunction = (req, res) => {
  console.log("1.create Hospital  controller function.."); // log to check on terminal
  console.log("postmen request req.body.", req.body); // log to check on terminal

  const Hospital = {
    HospitalName: req.body.HospitalName,
    HospitalAddress: req.body.HospitalAddress,
    HospitalEmail: req.body.HospitalEmail,
    CreatedBy: req.body.CreatedBy
  }
  console.log("testing Hospital object", Hospital);
  // calling to hospital model function.......................................
  console.log("2.Calling to create: Hospital model function..");
  console.log("3.callingHospital model");
  //modle.modelfunction
  Tutorial.createHospitalmodelFunction(Hospital, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};


//Create doctor Controller function---------------------------
exports.createdoctorControllerFunction = (req, res) => {
  console.log("1.create doctor controller function.."); // log to check on terminal
  console.log("postmen request req.body.", req.body); // log to check on terminal
  const doctor = {
    first_name: req.body.firstname,
    address: req.body.address,
    speshalist: req.body.speshalist,
    contact: req.body.contact,
    user_name:req.body.username,
    password:req.body. password,
    created_by:req.body.createdby
  }
  console.log("testing doctor object", doctor);
  // calling todoctormodel function.......................................
  console.log("2.Calling to create: doctormodel function..");
  console.log("3.callingdoctormodel");
  //modle.modelfunction
  Tutorial.createdoctormodelFunction(doctor, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};


//Create employee Controller function---------------------------
exports.createemployeeControllerFunction = (req, res) => {
  console.log("1.create employee controller function.."); // log to check on terminal
  console.log("postmen request req.body.", req.body); // log to check on terminal
  const employee = {
    name: req.body.name,
    designation: req.body.designation,
    age: req.body.age,
    user_name: req.body.username,
    password:req.body.password,
    role:req.body.role,
    created_by:req.body.createdby
 }
 console.log("testing doctor object", employee);
 // calling todoctormodel function.......................................
 console.log("2.Calling to create: emloyee model function..");
 console.log("3.callingemloyeemodel");
 //modle.modelfunction
 Tutorial.createemployeemodelFunction(employee, (err, data) => {
   if (err)
     res.status(500).send({
       message: err.message || "Some error occurred while creating the Tutorial."
     });
   else res.send(data);
 });
};


//Create employee Controller function---------------------------
exports.createpatientControllerFunction = (req, res) => {
  console.log("1.create patient controller function.."); // log to check on terminal
  console.log("postmen request req.body.", req.body); // log to check on terminal
  const patient = {
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    address: req.body.address,
    city: req.body.city,
    contact:req.body.contact,
    email_id:req.body.emailid,
    created_by:req.body.createdby
 }
 console.log("testing  patient object", patient);
 // calling patient model function.......................................
 console.log("2.Calling to create: patient model function..");
 console.log("3.calling patient model");
 //modle.modelfunction
 Tutorial.createpatientmodelFunction(patient, (err, data) => {
   if (err)
     res.status(500).send({
       message: err.message || "Some error occurred while creating the Tutorial."
     });
   else res.send(data);
 });
};

//Create task Controller function---------------------------
exports.createtaskControllerFunction = (req, res) => {
  console.log("1.create patient controller function.."); // log to check on terminal
  console.log("postmen request req.body.", req.body); // log to check on terminal
  const task = {
    name: req.body.name,
    designation: req.body.designation,
    preority: req.body.preority,
    doctor_id: req.body.doctorid,
    patient_id:req.body.patientid,
    assign_to:req.body.assignto,
    assign_by:req.body.assignby,
    created_by:req.body.createdby
 }
 console.log("testing   task object", task);
 // calling patient model function.......................................
 console.log("2.Calling to create: task model function..");
 console.log("3.calling task model");
 //modle.modelfunction
 Tutorial.createtaskmodelFunction(task, (err, data) => {
   if (err)
     res.status(500).send({
       message: err.message || "Some error occurred while creating the Tutorial."
     });
   else res.send(data);
 });
};

// Retrieve all Tutorials from the database (with condition).
// Retrieve all Tutorials from the database (with condition).
exports.findAlldoctor = (req, res) => {
  const title = req.body.firstname;

  Tutorial.getAlldoctor(title, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Retrieve all Tutorials from the database (with condition).
exports.findAllemployee= (req, res) => {
  const title = req.body.name;

  Tutorial.getAllemployee(title, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Retrieve all Tutorials from the database (with condition).
exports.findAllpatient= (req, res) => {
  const title = req.body.first_name;

  Tutorial.getAllpatient(title, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};


// Retrieve all Tutorials from the database (with condition).
exports.findAlltask= (req, res) => {
  const title = req.body.name;

  Tutorial.getAlltask(title, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Update a Tutorial identified by the id in the request
exports.updatedoctor= (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const doctorObject = {
    first_name: req.body.name
  };

  Tutorial.updatedoctor(
    req.params.id,
    doctorObject,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.doctor.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Tutorial with id " + req.doctor.id
          });
        }
      } else res.send(data);
    }
  );
};

// Update employee Tutorial identified by the id in the request
exports.updateemployee = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const employeeObject = {
    name: req.body.name
  };

  Tutorial.updateemployee (
    req.params.id,
    employeeObject,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.employee.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Tutorial with id " + req.employee .id
          });
        }
      } else res.send(data);
    }
  );
};

// Update Tutorial identified by the id in the request
exports.updatepatient = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const patientObject = {
    first_name: req.body.name
  };

  Tutorial.updatepatient (
    req.params.id,
   patientObject,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.patient.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Tutorial with id " + req.patient .id
          });
        }
      } else res.send(data);
    }
  );
};

// Update Tutorial identified by the id in the request
exports.updatetask = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const taskObject = {
    name: req.body.name
  };

  Tutorial.updatetask (
    req.params.id,
    taskObject,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.task .id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Tutorial with id " + req.task .id
          });
        }
      } else res.send(data);
    }
  );
};


exports.createEmp = (req, res) => {
  console.log("2.badam Create Controller Function Called");
  console.log("3.Request Controller Body Paramiters ", req.body);
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const emptutorial = new Tutorial({
    productname: req.body.productname,
    country: req.body.country
  });

  // Save Tutorial in the database
  Tutorial.createEmp(emptutorial, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.body.HospitalName;

  Tutorial.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};


// Retrieve all Tutorials from the database (with condition).
exports.findAllstudent = (req, res) => {
  const title = req.body.studentname;

  Tutorial.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};







// Find a single Tutorial by Id
exports.findOne = (req, res) => {
  Tutorial.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Tutorial with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Tutorial.updateById(
    req.params.id,
    new Tutorial(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Tutorial with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};


// Update a Tutorial identified by the id in the request
exports.updatestudent = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const studentObject = {
    studentname: req.body.studentname,
  };

  Tutorial.updatestudent(
    req.params.id,
    studentObject,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.student.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Tutorial with id " + req.student.id
          });
        }
      } else res.send(data);
    }
  );
};




// Delete a Tutorial with the specified id in the request
exports.deletestudent = (req, res) => {
  Tutorial.deleteStudent(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Tutorial with id " + req.params.id
        });
      }
    } else res.send({
      message: `Tutorial was deleted successfully!`
    });
  });

}


//Create user Controller function---------------------------
exports.createpatient2ControllerFunction = (req, res) => {
  console.log("1.create patient1  controller function.."); // log to check on terminal

  console.log("postmen request req.body.", req.body); // log to check on terminal
  const patient2 = {
    patientName: req.body.patientName,
    patientLastname: req.body.patientLastname,
    patientAddress: req.body.patientAddress,
    createdBy: req.body.createdBy
  }
  console.log("testing patient2 object", patient2);
  // calling topatient model function.......................................
  console.log("2.Calling to create: patient2 model function..");
  console.log("3.calling patient model");
  //modle.modelfunction
  Tutorial.createpatient2lmodelFunction(patient2, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};


// patient find........................................
exports.findAllpatient2 = (req, res) => {
  const title = req.body.patientName;

  Tutorial.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};


//Update a Tutorial identified by the id in the request....................
exports.updatepatient2= (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const patient2Object = {
    patientName: req.body.patientName,
  };

  Tutorial.updatepatient2(
    req.params.id,
   patient2Object,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.patient2.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Tutorial with id " + req.patient.id
          });
        }
      } else res.send(data);
    }
  );
};



// Delete a Tutorial with the specified id in the request....................
exports.deletepatient2 = (req, res) => {
  Tutorial.deletepatient2(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Tutorial with id " + req.params.id
        });
      }
    } else res.send({
      message: `Tutorial was deleted successfully!`
    });
  });

}














// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while removing all tutorials."
      });
    else res.send({
      message: `All Tutorials were deleted successfully!`
    });
  });
};









// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  Tutorial.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Tutorial with id " + req.params.id
        });
      }
    } else res.send({
      message: `Tutorial was deleted successfully!`
    });
  });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while removing all tutorials."
      });
    else res.send({
      message: `All Tutorials were deleted successfully!`
    });
  });
};


// arguments error and data
exports.fileErrorFirstCallback   = (err, data) => {
   console.log("Function successfully executed");
   
   const fs = require("fs");
   // This file does not exists
   const file = "file.txt";
   
   // Error first callback
   // function with two
   // arguments error and data
   const ErrorFirstCallback = (err, data) => {
   if (err) {
     return console.log(err);
   }
   console.log("Function successfully executed");
   };
   
   // function execution
   // This will return
   // error because file do
   // not exist
   fs.readFile(file, ErrorFirstCallback);
   
};
 //list item......................................................

exports.listitems = (err, data) => {
  const listItems = function(items) {
    items.forEach(function(item) {
      console.log(item)
    })
  }
  
  const items = ["Buy milk", "Buy coffee"]
  
  listItems(items)

};
exports.promises = (req, res) => {
  console.log("1.create promises controller function.."); // log to check on terminal

  function getSumNum(a, b) {
    const customPromise = new Promise((resolve, reject) => {
      const sum = a + b;
  
      if(sum <= 5){
        resolve("Let's go!!")
      } else {
        reject(new Error('Oops!.. Number must be less than 5'))
      }
    })
  
    return customPromise
  }
  
  // consuming the promise
  getSumNum(1, 3).then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
}

//promisez2............................................................
exports.promises2 = (req, res) => {
  console.log("1.create promises2 controller function.."); // log to check on terminal

  var promise = new Promise(function(resolve, reject) { 
    const x = "geeksforgeeks"; 
    const y = "geeksforgeeks"
    if(x === y) { 
      resolve(); 
    } else { 
      reject(); 
    } 
  }); 
      
  promise. 
      then(function () { 
          console.log('Success, You are a GEEK'); 
      }). 
      catch(function () { 
          console.log('Some error has occurred'); 
      });
} 

function isNumberValidation(field) {
var isNumber = Number.isInteger(field);
  if (isNumber) {

    console.log(field.toString() , "is number")

    if (field.toString().length >= 1 && field.toString().length <= 10) {
      // if (fileYear <= 12 && fileYear >= 1) {
      console.log(isNumber, "true")
      return true;
    } else {
      console.log(isNumber, "false")
      return false;
    }
  } else {
    console.log(field, "false")
    return false;
  }
}
exports.number = (req, res) => {
  console.log("1.create number controller function..");

  var isId = (isNumberValidation(req.body.id));
      if (!isId) {
        return res.status(400).json({
          success: 0,
          message: "Invalid Input Request!"
        });
      }else{
        console.log("true number")
      }
  
}