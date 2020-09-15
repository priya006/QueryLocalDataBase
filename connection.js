
const mysql = require("mysql");



// config for your database
var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "DataTool",
    multipleStatements: true
});

// connect to your database
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