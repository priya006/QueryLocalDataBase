
const mysql = require("mysql");




var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "DataTool",
    multipleStatements: true
});


mysqlConnection.connect((err) =>{

if(!err)
{
    console.log("Connection is established");
}

else
{
    console.log("Connection Failed!");
}

});

// mysqlConnection.connect(function(err) {
//     if (err) {
//       return console.error('error: ' + err.message);
//     }
  
//     console.log('Connected to the MySQL server.');
//   });


module.exports = mysqlConnection;