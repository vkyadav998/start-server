/**
 * Created by pc on 14-05-2016.
 */
var express = require("express");
var bodyParser= require("body-parser");
var app=new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post("/vky",function (req,res) {
    var name=req.body.name;
    var mname=req.body.mname;
    var lname=req.body.lname;
    res.send("Post my name is "+ name+" "+mname+" "+lname);
});

app.listen(3003,function () {
    console.log("my server3 is started ");
})