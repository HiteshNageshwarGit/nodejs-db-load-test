var express = require("express");
var path = require("path");

var app = express();
var port = process.env.port || 7777;
var srcpath = path.join(__dirname, '/public');
app.use(express.static('public'));

//api for get data from database  
app.get("/api/getdata", function (req, res) {

})

//api for Delete data from database  
app.post("/api/Removedata", function (req, res) {

})

//api for Update data from database  
app.post("/api/Updatedata", function (req, res) {

})

//api for Insert data from database  
app.post("/api/savedata", function (req, res) {

})

// call by default index.html page  
app.get("*", function (req, res) {
    res.sendFile(srcpath + '/index.html');
})

//server stat on given port  
app.listen(port, function () {
    console.log("server start on port" + port);
}) 