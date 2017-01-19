var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index/index");
});
router.use("/login",function(req,res,next){
  res.render("index/login");
})

router.use("/regcheck",function(req,res,next){
  var name=req.body.name;
  console.log(name);
  res.send(name);
})
module.exports = router;
