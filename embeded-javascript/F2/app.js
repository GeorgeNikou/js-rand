var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.render("home.ejs");
});

app.get("/seasons/:type", function(req, res){
	var season = [{
		type: req.params.type.toLowerCase()
	}];
	res.render("seasons.ejs", {season:season})
});

app.get("/holiday/:type", function(req, res){
	var holiday = [{
		type: req.params.type.toLowerCase()
	}];
	res.render("holiday.ejs", {holiday:holiday});
});


app.get("*", function(req, res){
	res.render("404page.ejs");
});

app.listen(3000, function(){
	console.log("Port 3000 connected successfully.")
});