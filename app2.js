/**
 * Created by pc on 14-05-2016.
 */
var express = require("express");
var app=new express();

app.get("/vipin",function (req,res) {
res.send( "get  my name is Vipin");
});

app.post("/vipin",function (req,res) {
    res.send("Post my name is Vipin")
});

app.listen(3002,function () {
    console.log("my server is started ");
})