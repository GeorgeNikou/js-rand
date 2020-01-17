//app.js ------------------------
var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/results", function(req, res){
	var query = req.query.search;
	var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
	request(url, function(error, response, body){
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body);
			res.render("results", {data:data});
		}
	});
});

app.get("/", function(req, res){
	res.render("search");
})

app.get("*", function(req, res){
	res.send("404 error");
})

app.listen(3000, function(){
	console.log("movie app has started.")
});




app.listen(3000, function(){
	console.log("movie app has started.")
});

//results.ejs ------------------------
<h1>Results Page</h1>

<ul>
<% data["Search"].forEach(function(movie){ %>
	<li><Strong><%= movie["Title"] %> </Strong> <%= " - " + movie["Year"] %></li>
<% }); %>
</ul>

<a href="https://webdevbootcamp-lqdfb.run-us-west1.goorm.io/">Search Again</a>



//search --------------------------
<h1>Search for a movie</h1>
	
<form action="/results" method="GET">
	<input type="text" placeholder="search term" name="search">
	<input type="submit">
</form>
