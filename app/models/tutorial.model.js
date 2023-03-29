const sql = require("./db.js");
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(7);

var JWT = require('../fn/JWT');

// constructor
const Tutorial = function (tutorial) {
  this.title = tutorial.title;
  this.description = tutorial.description;
  this.published = tutorial.published;
};

const emp = function (tutorial) {
  this.firstname = tutorial.firstname;
  this.lastname = tutorial.lastname;
};
//3. Create Model function call.
Tutorial.create = (Tutorial, result) => {
  console.log("ramesh. Create Model Function Called");
  console.log("5.Request Model Body Paramiters ", Tutorial);
  sql.query("INSERT INTO tutorials SET ?", Tutorial, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created tutorial: tds ", { id: res.insertId, ...Tutorial });
    result(null, { id: res.insertId, ...Tutorial });
  });
};






// Product Model-------------------------------
exports.createproductModelFuction = (product, result) => {
  console.log("3. Create productModel Function Called");
  sql.query("INSERT INTO product SET ?", product, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created college:  ", { id: res.insertId, ...college });
    result(null, { id: res.insertId, ...college });
  });
};






// school Model-------------------------------
exports.createschooltControllerFunction = (school, result) => {
  console.log("3. Create school Model Function Called");
  console.log("creat student model ");
  sql.query("INSERT INTO school SET ?", school, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created  student:  ", { id: res.insertId, ...school });
    result(null, { id: res.insertId, ...school });
  });
};




// student Model-------------------------------
exports.createstudentmodelFunction = (student, result) => {
  console.log("3. Create student Model Function Called");
  sql.query("INSERT INTO student SET ?", student, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created student:  ", { id: res.insertId, ...student });
    result(null, { id: res.insertId, ...student });
  });
};


//Hospital model.........................................................
exports.createHospitalmodelFunction = (hospital, result) => {
  console.log("3. Create student Model Function Called");
  var query = `INSERT INTO Hospital (HospitalName, hospitalAddress,HospitalEmail,CreatedBy) VALUES ('${hospital.HospitalName}', '${hospital.HospitalAddress}', '${hospital.HospitalEmail}', '${hospital.CreatedBy}')`;
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...hospital });
  });
}



//doctor model.........................................................
exports.createdoctormodelFunction = (doctor, result) => {
  console.log("3. Create doctor Model Function Called");
  var query = `INSERT INTO doctor_tab ( first_name,address,speshalist,contact,user_name,password,created_by) VALUES  ('${doctor.first_name}','${doctor.address}','${doctor.speshalist}','${doctor.contact}','${doctor.user_name}','${doctor.password}','${doctor.created_by}')`;
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...doctor });
  });
}

//emloyee model.........................................................
exports.createemployeemodelFunction = (employee, result) => {
  console.log("3. Create emloyee Model Function Called");
  var query = `INSERT INTO employee_tb ( name,designation,age,user_name,password,role,created_by) VALUES  ('${employee.name}','${employee.designation}','${employee.age}','${employee.user_name}','${employee.password}','${employee.role}','${employee.created_by}')`;
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...employee });
  });
}

//patient model.........................................................
exports.createpatientmodelFunction = (patient, result) => {
  console.log("3. Create patient Model Function Called");
  var query = `INSERT INTO patient_tb ( first_name,last_name,address,city,contact,email_id,created_by) VALUES  ('${patient.first_name}','${patient.last_name}','${patient.address}','${patient.city}','${patient.contact}','${patient.email_id}','${patient.created_by}')`;
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...patient });
  });
}

//task model.........................................................
exports.gcreatetaskmodelFunction = (task, result) => {
  console.log("3. Create taskt Model Function Called");
  var query = `INSERT INTO task_tb ( name,designation,preority,doctor_id,patient_id,assign_to,assign_by,created_by) VALUES  ('${task.name}','${task.designation}','${task.preority}','${task.doctor_id}','${task.patient_id}','${task.assign_to}','${task.assign_by}','${task.created_by}')`;
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...task });
  });
}
//user model.........................................................
exports.createusermodelFunction = (user, result) => {
  console.log("3. Create user Model Function Called");
  var selectQuery = `SELECT * FROM user_tb  WHERE email_id = '${user.email_id}'`;
  sql.query(selectQuery, (err, res) => {
    if (err) {
      return result(err, null);
    }
    console.log("res: ", res);
    if (res.length > 0) {
      return result({
        status: 409
      }, null);
    } else {
      var encryptedPassword = bcrypt.hashSync(user.apassword, salt)
      var query = `INSERT INTO user_tb ( first_name,last_name,email_id,apassword,is_active,created_by) VALUES ('${user.first_name}','${user.last_name}','${user.email_id}','${encryptedPassword}','${user.is_active}','${user.created_by}')`;
      sql.query(query, (err, res) => {
        if (err) {
          console.log("error: ", err);
          return result(err, null);
        }
        return result(null, { id: res.insertId, ...user });
      });
    }
  });
}

exports.logInModelFunction = (userObject, result) => {
  console.log("3. Create user Model Function Called");
  var selectQuery = `SELECT * FROM user_tb  WHERE email_id = '${userObject.email_id}'`;
  sql.query(selectQuery, (err, res) => {
    if (err) {
      return result(err, null);
    }
    console.log("user pass",userObject.apassword)
    console.log("res: ", res);
    if (res.length > 0) {
      console.log(res[0].apassword)
      // var newPass = bcrypt.hashSync(userObject.apassword, salt);
      let compare = bcrypt.compareSync(userObject.apassword, res[0].apassword)
      console.log(compare);
      if (compare == false) {
        console.log("Email and password does not match")
        return result({
          status: 404
        }, null);
      }
      var user = {
        user_id: res[0].user_id,
        first_name: res[0].first_name,
        last_name: res[0].last_name,
        email_id: res[0].email_id
      }
      console.log("user", user);
      var UserObject = {
        user: user,
        token: JWT.issue(user)
      }
      return result(null, UserObject);
    } else {
      return result({
        status: 404
      }, null);
    }
  });
}




//find doctor...........................................................
exports.getAlldoctor = (first_name, result) => {
  console.log("first_name", first_name);
  let query = "SELECT * FROM doctor_tab";
  if (first_name) {
    query += ` WHERE first_name LIKE '%${first_name}%'`;
  }
  console.log("query", query);
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("doctor_tab: ", res);
    result(null, res);
  });

};

//findemployee..........................................................
exports.getAllemployee = (name, result) => {
  console.log("name", name);
  let query = "SELECT * FROM employee_tb";
  if (name) {
    query += ` WHERE name LIKE '%${name}%'`;
  }
  console.log("query", query);
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("employe_tb: ", res);
    result(null, res);
  });

};

//findpatient..........................................................
exports.getAllpatient = (first_name, result) => {
  console.log("first_name", first_name);
  let query = "SELECT * FROM patient_tb";
  if (first_name) {
    query += ` WHERE first_name LIKE '%${first_name}%'`;
  }
  console.log("query", query);
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("patient_tb: ", res);
    result(null, res);
  });

};

//find task..........................................................
exports.getAlltask = (name, result) => {
  console.log("name", name);
  let query = "SELECT * FROM task_tb";
  if (name) {
    query += ` WHERE name LIKE '%${name}%'`;
  }
  console.log("query", query);
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("task_tb: ", res);
    result(null, res);
  });

};
//find user...........................................................
exports.getAlluser = (first_name, result) => {
  console.log("first_name", first_name);
  let query = "SELECT * FROM user_tb";
  if (first_name) {
    query += ` WHERE first_name LIKE '%${first_name}%'`;
  }
  console.log("query", query);
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("user_tb: ", res);
    result(null, res);
  });

};






//update doctor...........................................
exports.updatedoctor = (id, tutorial, result) => {
  sql.query(
    "UPDATE  doctor_tab SET first_name = ?  WHERE doctor_id  = ?",
    [tutorial.first_name, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated doctor_tab : ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};


//update employee..........................................
exports.updateemployee = (id, tutorial, result) => {
  sql.query(
    "UPDATE  employee_tb SET name = ?  WHERE employee_id   = ?",
    [tutorial.name, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated doctor_tab : ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};

//update patient..........................................
exports.updatepatient = (id, tutorial, result) => {
  sql.query(
    "UPDATE   patient_tb SET first_name = ?  WHERE  patient_id   = ?",
    [tutorial.first_name, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated  patient_tb : ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};


//update task..........................................
exports.updatetaskt = (id, tutorial, result) => {
  sql.query(
    "UPDATE  task_tb SET name = ?  WHERE  task_id   = ?",
    [tutorial.name, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated  task_tb : ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};


//update user..........................................
exports.updateuser = (userid, user, result) => {
  var query = `UPDATE user_tb SET first_name = '${user.first_name}', last_name= '${user.first_name}' , email_id= '${user.email_id}', password= '${user.password}' , is_active= '${user.is_active}', created_by= '${user.created_by}'WHERE user_id = '${user.userid}';`;
  sql.query(query,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found user with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated user_tb : ", { userid: userid, ...user });
      result(null, { userid: userid, ...user });
    }
  );
};








//delet doctor ...................................................
exports.deletedoctor = (id, result) => {
  sql.query("DELETE FROM doctor_tab WHERE doctor_id  = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.first_name == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tutorial with id: ", id);
    result(null, res);
  });
};



//delet employee ...................................................
exports.deleteemployee = (id, result) => {
  sql.query("DELETE FROM employee_tb WHERE employee_id    = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.name == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tutorial with id: ", id);
    result(null, res);
  });
};


//delet patient...................................................
exports.deletepatient = (id, result) => {
  sql.query("DELETE FROM patient_tb WHERE patient_id    = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.first_name == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tutorial with id: ", id);
    result(null, res);
  });
};

//delete task...................................................
exports.deletetask = (id, result) => {
  sql.query("DELETE FROM task_tb WHERE  task_id    = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.name == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tutorial with id: ", id);
    result(null, res);
  });
};


//delet user ...................................................
exports.deleteuser = (id, result) => {
  sql.query("DELETE FROM user_tb WHERE user_id   = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.first_name == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tutorial with id: ", id);
    result(null, res);
  });
};






exports.getAll = (name, result) => {
  console.log("name", name);
  let query = "SELECT * FROM hospital";
  if (name) {
    query += ` WHERE HospitalName LIKE '%${name}%'`;
  }
  console.log("query", query);
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("hospital: ", res);
    result(null, res);
  });

};



exports.getAll = (name, result) => {
  console.log("name", name);
  let query = "SELECT * FROM student";
  if (name) {
    query += ` WHERE studentName LIKE '%${name}%'`;
  }
  console.log("query", query);
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("student: ", res);
    result(null, res);
  });

};



emp.createEmp = (newTutorial, result) => {
  console.log("ramesh. Create Model Function Called");
  console.log("5.Request Model Body Paramiters ", newTutorial);
  sql.query("INSERT INTO emp SET ?", newTutorial, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created tutorial: tds ", { id: res.insertId, ...newTutorial });
    result(null, { id: res.insertId, ...newTutorial });
  });
};

Tutorial.findById = (id, result) => {
  sql.query(`SELECT * FROM tutorials WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tutorial: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Tutorial.getAll = (title, result) => {
  let query = "SELECT * FROM tutorials";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tutorials: ", res);
    result(null, res);
  });
};

Tutorial.getAllPublished = result => {
  sql.query("SELECT * FROM tutorials WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tutorials: ", res);
    result(null, res);
  });
};
//update student............................................
exports.updatestudent = (id, tutorial, result) => {
  sql.query(
    "UPDATE  student SET studentname = ?  WHERE studentid = ?",
    [tutorial.studentname, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated Student: ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};

Tutorial.remove = (id, result) => {
  sql.query("DELETE FROM student WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tutorial with id: ", id);
    result(null, res);
  });
};

Tutorial.removeAll = result => {
  sql.query("DELETE FROM tutorials", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} tutorials`);
    result(null, res);
  });
};












//patient model.....Patient....................................................
exports.createpatient2lmodelFunction = (patient2, result) => {
  console.log("3. Create patient2 Model Function Called");
  var query = `INSERT INTO patient2 (patientName, patientLastname,patientAddress,createdBy) VALUES ('${patient2.patientName}', '${patient2.patientLastname}', '${patient2.patientAddress}', '${patient2.createdBy}')`;
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...patient2 });
  });
}
//getfind........................................................................
exports.getAll = (name, result) => {
  console.log("name", name);
  let query = "SELECT * FROM patient2";
  if (name) {
    query += ` WHERE patientName LIKE '%${name}%'`;
  }
  console.log("query", query);
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("patient2: ", res);
    result(null, res);
  });

};

//update patient.....................................................................
exports.updatepatient2 = (id, tutorial, result) => {
  sql.query(
    "UPDATE patient2 SET patientName = ?  WHERE patientId  = ?",
    [tutorial.patientName, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated patient2: ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};

//delet student .......................................................................
exports.deletepatient2 = (id, result) => {
  sql.query("DELETE FROM patient2 WHERE patientId = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.patientName == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tutorial with id: ", id);
    result(null, res);
  });
};










// module.exports = Tutorial;
// module.exports = emp;
