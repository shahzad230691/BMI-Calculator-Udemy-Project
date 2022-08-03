const express= require("express");
const bodyParser= require("body-parser");
const app= express();
const port= 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req,res){
    var weight= Number(req.body.weight);
    var height= Number(req.body.height);
    var result= (weight/(Math.pow(height,2)))*10000;
    res.send("BMI is "+result);
});

app.listen(port, function() {
    console.log("Server started on port 3000");
});