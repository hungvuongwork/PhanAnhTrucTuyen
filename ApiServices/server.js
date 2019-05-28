var express = require('express');
var app = express();
var cors = require('cors');
var port = process.env.port || 3000;
var bodyParser = require('body-parser');

var nopHoSoQuaMangController = require("./Controllers/NopHoSoQuaMangController")();
var nguoiDungController = require("./Controllers/NguoiDungController")();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Module
app.use("/api/nophosoquamang", nopHoSoQuaMangController);
app.use("/api/nguoidung", nguoiDungController);

app.listen(port, function() {
    var datetime = new Date();
    var message = "Server is running at port: " + port + " Started at: " + datetime;
    console.log(message);
});