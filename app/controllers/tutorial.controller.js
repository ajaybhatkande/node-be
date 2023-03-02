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
  
  let arr =[];
  for (let i = 1; i <= number; i++) {
      console.log(n1);
      arr.push(n1)
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
  }

  res.send({
    "result":arr
  });

}










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
  const title = req.query.title;

  productTutorial.getAll(title, (err, data) => {
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