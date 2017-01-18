var express=require("express");
// var mysql=require("../mysql.js");
var crypto=require("crypto");
var router=express.Router();
router.use("/login",function(req,res,next){
    res.sendFile(rootPath+"/public/tpl/login.html");
})
router.use("/reg",function(req,res,next){
   res.sendFile(rootPath+"/public/tpl/reg.html");
})
router.use("/regcheck",function(req,res,next){
    var name=req.body.name;
    console.log(name)
})
router.use("/react",function(req,res,next){
    res.sendFile(rootPath+"/public/tpl/pass.html");
})
router.use("/xiugai",function(req,res,next){
    // res.sendFile(rootPath+"/public/tpl/xiugaipass.ejs");
    var name=req.body.name;
    var user=req.body.user;
    var obj={};
    //查询出id赋值给obj渲染到前台页面。
    res.render(rootPath+"/public/tpl/xiugaipass.ejs",obj);
})
router.use("/xiugaipass/:id",function(req,res,next){
    var name=req.body.name;
})

module.exports = router;