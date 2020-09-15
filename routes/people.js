
const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");


Router.get("/",(req, res)=>{
     // query to the database and get the records
mysqlConnection.query("SELECT * from people",(err,rows,fields) =>{
  if(!err){
    res.send(rows);
      console.log(res);
  }

  else
  {
      console.log(err);
      console.log(res);
  }
    
} )

})


module.exports = Router;