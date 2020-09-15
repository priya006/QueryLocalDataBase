
const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");
const path = require("path");


Router.get("/",(req, res)=>{
     // query to the database and get the records
mysqlConnection.query("SELECT * from people",function (err,data){
  if(!err){
   // res.send(rows);
      console.log(data);
     // res.send(data);

     res.sendFile(path.join(__dirname + '/index_new.html'));
      
  }

  else
  {
      console.log(err);
      console.log(res);
  }
    
} )

});


Router.post("/Employees",(req, res)=>{
    // query to the database and get the records

    let age = req.body.age;
    console.log('Age', age);


mysqlConnection.query("INSERT INTO people VALUES (12434,'xbc')",function (err,data){
 if(!err){
  // res.send(rows);
     console.log(data);
    //Sends data to /Employees page
     res.send(data);

   
     
 }

 else
 {
     console.log(err);
     console.log(res);
 }
   
} )

});


//close database connection



module.exports = Router;