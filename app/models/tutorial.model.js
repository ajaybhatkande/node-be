const sql = require("./db.js");

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

Tutorial.updateById = (id, tutorial, result) => {
  sql.query(
    "UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?",
    [tutorial.title, tutorial.description, tutorial.published, id],
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

      console.log("updated tutorial: ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};

Tutorial.remove = (id, result) => {
  sql.query("DELETE FROM tutorials WHERE id = ?", id, (err, res) => {
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

// module.exports = Tutorial;
// module.exports = emp;
