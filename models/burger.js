// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
  // selectAll()
  all: function (cb) {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },
  // insertOne()
  create: function (cols, vals, burger_name, cb) {
    orm.create("burgers", cols, vals, burger_name, (res) => {
      cb(res);
    });
  },
// updateOne()
  update: function (objColVals, condition, burger_id, cb) {
    orm.update("burgers", objColVals, condition, burger_id, (res) => {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the Model.
module.exports = burger;
