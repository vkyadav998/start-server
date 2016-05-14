/**
 * Created by pc on 14-05-2016.
 */
var express = require("express");
var app=new express();

app.get("/vk",function (req,res) {
    console.log(req.query);
    var name=req.query.name;
    var mname=req.query.mname;

    res.send( "get  my name is :" + name+" "+mname);
});

app.post("/vk",function (req,res) {
    var name=req.query.name;
    var mname=req.query.mname;
    var lname=req.query.lname;
    res.send("Post my name is "+ name+" "+mname+" "+lname);
});

app.listen(3003,function () {
    console.log("my server3 is started ");
})