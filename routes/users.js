var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(2)
  res.render("admin/index");
});
router.get("/login",function(req,res){
  res.render("admin/login");
});

module.exports = router;
