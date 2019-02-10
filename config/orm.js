// Import MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  const burgerArray = [];

  for (var i = 0; i < num; i++) {
      burgerArray.push("?");
  };
  return burgerArray.toString();
};

// Function to convert object key and value pairs to SQL syntax.
function objectToSql(object) {
  const burgerArray = [];

  // Loop through keys and push key/vale as a string integer array.
  for (let key in object) {
      const value = object[key];
      if (Object.hasOwnProperty.call(object, key)) {
          // If string has spaces, add quotations.
          if (typeof value === "string" && value.indexOf(" ") >= 0) {
              value = "'" + value + "'";
          };
          burgerArray.push(key + "=" + value);
      };
  };
  return burgerArray.toString();
};


// selectAll()
var orm = {

  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //insertOne()
  insertOne: function (table, cols, vals, cb) {
    let queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
        if (err) throw err;

        cb(result);
    });
},

  //updateOne()
  update: function (table, objColVals, condition, cb) {
    let queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objectToSql(objColVals);
    queryString += " WHERE ?";

    console.log(queryString);

    connection.query(queryString, [condition],(err, result) => {
        if (err) throw err;

        cb(result);
    });
}
};

// Export the orm object for the model (burger.js).
module.exports = orm;
