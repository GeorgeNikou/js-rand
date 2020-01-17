var index = require("express");
var app = index();

// home page
app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

// animal noises redirection on speak/:sub
app.get("/speak/:noise", function(req, res){
	var noise = req.params.noise;
	
	switch(noise.toLowerCase()) {
	  case "cow":
		res.send("Moo!");
		break;
	  case "pig":
		res.send("Oink!");
		break;
	  case "dog":
		res.send("Woof woof!");
		break;
	}
});

// say hello X of times
app.get("/repeat/hello/:number", function(req, res){
	var num = req.params.number;
	var result = "";
	
	console.log(num);
	
	for(var i = 0; i < Number(num); i++){
		result+= " hello"
		console.log((i + 1) + ": " + "hello ");
	}
	res.send(result);
});

// page redirection to say blah X of times
app.get("/repeat/blah/:number", function(req, res){
	var num = req.params.number;
	var result = "";
	
	for(var i = 0; i < Number(num); i++){
		result+= " blah";
		console.log((i + 1) + ": " + "blah ");
	}
	res.send(result);
})

// 404 redirect
app.get("*", function(req, res){
	res.send("Sorry, page not found... What are you doing with your life?");
})

app.listen(3000, function(){
	console.log("Connected successfully!");
});