'use strict';

var port = process.env.PORT || 3000;

var express = require("express");
var Words = require("./lib/words.js");
var bdprs = require('body-parser');

var app = express();
var w = new Words();
var adj = new w.adj();
var vrb = new w.vrb();
var nn = new w.nn();

app.use(bdprs.json());
app.use(bdprs.urlencoded({extended: true}));
app.use(express.static(__dirname + "/"));

app.listen(port, function () {
  console.log("psssst, it's 3000");
});

app.get("/", function (req, res) {
	res.sendFile("static/index.html", {"root": __dirname});
});

app.get("/adj", function (req, res) {
	res.json(w.rando(adj));
});

app.get("/adjAll", function (req, res) {
	res.json(w.all(adj));
});

app.get("/vrb", function (req, res) {
	res.json(w.rando(vrb));
});

app.get("/vrbAll", function (req, res) {
	res.json(w.all(vrb));
});

app.get("/nn", function (req, res) {
	res.json(w.rando(nn));
});

app.get("/nnAll", function (req, res) {
	res.json(w.all(nn));
});

app.post("/adj", function (req, res) {
	var wrd = w.chkWrd(req.body.wrd, adj);
	res.json(wrd);
});

app.post("/vrb", function (req, res) {
	var wrd = w.chkWrd(req.body.wrd, vrb);
	res.json(wrd);
});

app.post("/nn", function (req, res) {
	var wrd = w.chkWrd(req.body.wrd, nn);
	res.json(wrd);
});