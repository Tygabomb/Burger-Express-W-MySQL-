const express = require("express");
const router = express.Router();
const burger = require('../models/burger.js');

//Setup Routes
router.get("/", function (req, res) {
  burger.all((data) => {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
      req.body.burger_name, req.body.devoured
    ], function (result) {
      res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
  burger.updateOne({
    devoured: true
  }, {
      id: req.params.id
    }, data => {
      res.send(data);
    })
});


//   let condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.updateOne({
//     name: req.body.burger_name, 
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.get('/', function (req, res) 
// {
//   res.redirect('/index');
// });


// Export routes
module.exports = router;

