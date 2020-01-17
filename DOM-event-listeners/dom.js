
// Lesson 186 - intro to event listeners

var button = document.getElementsByClassName("button-listen")[0];
var body = document.querySelector("body");

button.addEventListener("mousewheel", function(){
	alert("hello!");
	button.style.color = "red";
	button.style.border = "border solid blue";
	button.style.padding = "10px";
});

body.addEventListener("click", function(){

	if(button.style.color = "red") {
		button.style.color = 'blue';
	}
	else if(button.style.color = "blue"){
		button.style.color = 'red';
	}
});


// adding action  listener to all "li"s
var li = document.querySelectorAll("li");

for(var i = 0; i < li.length; i++) {
	li[i].addEventListener("click", function(){
		this.style.color = "red";
	});
};