
const express = require("express");
const bodyparser = require("body-parser");
const mysqlConnection = require("./connection");
const PeopleRouter = require("./routes/people");
var app = express();
var port = '3000';

app.use(bodyparser.json());
app.use("/people",PeopleRouter);
app.listen(port);
console.log('Server listening on port ' + port);