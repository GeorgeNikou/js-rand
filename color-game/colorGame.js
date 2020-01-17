var numberOfSquares = 6;
var square = document.querySelectorAll(".square");
var chosenColor = generateRandColors(numberOfSquares);
var pickedColor = pickColor(); // chosenColor[Math.floor(Math.random() * chosenColor.length)]
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newGame = document.getElementById("newGame");
var btnEasy = document.getElementById("btnEasy");
var btnHard = document.getElementById("btnHard");
var clickedColor;


// new game button listener
newGame.addEventListener("click", function(){
	h1.style.backgroundColor = "steelblue";
	newGame.textContent = "New Colors";
	messageDisplay.textContent = "";

	// generate all new chosenColor
	chosenColor = generateRandColors(numberOfSquares);

	// pick new random number from array
	pickedColor = pickColor();

	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;

	// change chosenColor of square
	for(var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = chosenColor[i];
	}	
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < square.length; i++) {
	// add intial color to squares
	square[i].style.backgroundColor = chosenColor[i];

	// add click listeners to squares
	square[i].addEventListener("click", function(){
		// grab color of clicked square
		clickedColor = this.style.backgroundColor;

		// compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(square);
			h1.style.backgroundColor = pickedColor;
			newGame.textContent = "Play Again?"
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";			
		}
	});
}

// easy button listener
btnEasy.addEventListener("click",  function(){
	h1.style.backgroundColor = "steelblue";
	btnHard.classList.remove("selected");
	btnEasy.classList.add("selected");
	numberOfSquares = 3;
	chosenColor = generateRandColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";

	// remove the bottom 3 squares and change colors
	for(var i = 0; i < square.length; i++){
		if(chosenColor[i]){
			square[i].style.backgroundColor = chosenColor[i];		
		}
		else {
			square[i].style.display = "none";
		}
	}
});

// hard button listener
btnHard.addEventListener("click",  function(){
	h1.style.backgroundColor = "steelblue";
	btnEasy.classList.remove("selected");
	btnHard.classList.add("selected");
	numberOfSquares = 6;
	chosenColor = generateRandColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = chosenColor[i];			
		square[i].style.display = "block";
	}
	
});


// function to color all boxes
function changeColors(square){
	// loop through all squares
	for(var i = 0; i < square.length; i++){

	// change each color to match the given color
	square[i].style.backgroundColor = pickedColor;
}
}

// random color generateRandColors
function generateRandColors(num){
	// make an array
	var arr = [];

	// repeat num times
	for(var i = 0; i < num; i++){

	// get random color and push into array
	arr.push(randomColor());
}
	// return that array
	return arr;
}

// generates a random RGB
function randomColor(){
	// pick a red from 0 to 255
	var r = Math.floor(Math.random() * 255 + 1);

	// pick a green from 0 to 255
	var g = Math.floor(Math.random() * 255 + 1);

	// pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 255 + 1);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


function pickColor(){
	var random = Math.floor(Math.random() * chosenColor.length);
	return chosenColor[random];
}