var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js');

//Setup Routes
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    name: req.body.burger_name, 
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// router.get('/', function (req, res) 
// {
//   res.redirect('/index');
// });

// Index Page 
// router.get('/index', function (req, res) 
// {
//   burger.all((data) => 
//   {
//     var hbsObject = { burgers: data };
    
//     res.render('index', hbsObject);
//   });
// });

// // Create a New Burger
// router.post('/burger/insertOne', function (req, res) 
// {
//   burger.insertOne(req.body.burger_name, () =>
//   {
//     res.redirect('/index');
//   });
// });

// // Devour a Burger
// router.post('/burger/eat/:id', function (req, res) 
// {
//   burger.updateOne(req.params.id, () =>
//   {
//     res.redirect('/index');
//   });
// });

// Export routes
module.exports = router;

