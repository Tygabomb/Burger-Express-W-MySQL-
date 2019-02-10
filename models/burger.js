// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  // selectAll()
  all: function (cb) {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },
  // insertOne()
  insertOne: function (burger_name, cb) {
    orm.create("burgers", burger_name, (res) => {
      cb(res);
    });
  },
// updateOne()
  updateOne: function (burger_id, cb) {
    orm.update("burgers", burger_id, (res) => {
      cb(res);
    });
  }
};

// Export the database functions for the Model.
module.exports = burger;
