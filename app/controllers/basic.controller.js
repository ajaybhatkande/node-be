const basicModel = require("../models/basic.model.js");

exports.createArray = (req, res) => {
  console.log("this is createArray function..");
  // Array Creation.
  var array = [];
  // Another Way of creating array
  //var array = new Array();
  //var array = [3,5,12,8,7];

  array[0] = 3;
  array[1] = 5;
  array[2] = 12;
  array[3] = 8;
  array[4] = 7;

  array.push(10);
  array.push(18);

  // array[2] = -2;
  // array[3] = 5;
  // console.log(array);

  console.log(array);
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  console.log("Array Creation", array);

  // array.pop();
  //console.log(array);

};

//for loop function..........
exports.createforloop = (req, res) => {
  console.log("this is createforloopay function..");
  //   var arrayNum = [];
  //   let number = parseInt(req.body.num)
  //   for (let i = 1; i <= number; i++) {
  //     console.log("I can count to " + i)
  //     arrayNum.push(i);c 
  //   }
  //   res.send({
  //     "result": arrayNum
  //   });
  //FOR LOOP...............................................
  //const person = { name: 'Steve'};
  // let booksRead = 10;
  // do {
  //  console.log(`I read ${booksRead} books this year`);
  //  booksRead++;
  // } while (booksRead < 14);
  //WHILE LOOP.....................................................
  // let e = 0;
  // while (e < 4) {//WHILE LOOP
  //   e++;
  // }

  //do while loop................................................
  //   let booksRead = 10;
  // do {
  //  console.log(`I read ${booksRead} books this year`);
  //  booksRead++;
  // } while (booksRead < 14);
  // 



  //for in loop.....................
  const foodIAte = {
    breakfast: 'eggs ',
    lunch: 'salad',
    dinner: 'pizza'
  };

  for (const meal in foodIAte) {
    console.log(`For ${meal}, I ate ${foodIAte[meal]}.`);
  };

}
//data type...............................................
exports.datatype = (req, res) => {
  console.log("this is  datatype function..");
  // console.log("Inside  text Function...", req.body);
  const num1 = parseInt(req.body.firstname);
  const num2 = parseInt(req.body.lastname);
  const num3 = parseInt(req.body.age);
  const num4 = parseInt(req.body.country);
  //   // var firstName = "Ajay";
  //   // var firstName = 'Ajay';

  //   // console.log(firstName);

  //   // Object creation...................................

  let person = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    country: req.body.country

  };

  res.send({
    "result": person
  });


}


//if else condition .................................................

exports.ifcondition = (req, res) => {
  console.log("this is ifcondition function..");
  const number = parseInt(req.body.num1)
  let result;
  if (number > 0) {
    console.log("positive");
    res.send({
      message: "positive"
    });

  } else {
    console.log("not positive");
    res.send({
      message: "not positive"
    });
   }
}


//do while.............................
exports.dowhile = (req, res) => {
  console.log("this is dowhile function..");
  

  let result = '';
  let i = 0;
  
  do {
    i = i + 1;
    result = result + i;
  } while (i < 5);
  
  console.log(result);

}