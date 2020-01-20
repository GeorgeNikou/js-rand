var playerOne = document.querySelectorAll("button")[0];
var playerTwo = document.querySelectorAll("button")[1];
var reset = document.querySelectorAll("button")[2];
var playerOneScore = document.getElementById("one");
var playerTwoScore = document.getElementById("two");
var gameLength = document.getElementById("gameLength");
var input = document.querySelector("input");
var p = document.querySelector("p");

var numP1 = 0;
var numP2 = 0;

// player 1 
playerOne.addEventListener("mouseup", function(){
	if(playerOneScore.textContent ==  gameLength.textContent || playerTwoScore.textContent ==  gameLength.textContent){
		alert("The game is already over. Please press reset to play again.");
	}
	else{
		// check if player 1 wins the game
		if(numP1 >= gameLength.textContent -1){
			p.textContent = "Player 1 wins the game!";
			playerOneScore.textContent = gameLength.textContent;
		}
		else {
		// p1 won the round
		numP1+=1;
		playerOneScore.textContent = numP1;
	}
}
});

// player 2 
playerTwo.addEventListener("click", function(){
	if(playerTwoScore.textContent ==  gameLength.textContent || playerOneScore.textContent ==  gameLength.textContent){
		alert("The game is already over. Please press reset to play again.");
	}
	else{
		// check if player 2 wins the game
		if(numP2 >= gameLength.textContent -1){
			p.textContent = "Player 2 wins the game!";
			playerTwoScore.textContent = gameLength.textContent;
		}
		else {
		// p2 won the round
		numP2+=1;
		playerTwoScore.textContent = numP2;		
	}
}
});

// on  key presses for game length
input.addEventListener("keyup", function(){
	gameLength.textContent = this.value;
});
// on  mouse click for game length
input.addEventListener("click", function(){
	gameLength.textContent = this.value;
});
// reset
reset.addEventListener("click", function(){
	resetScore();
});


// reset function
function resetScore(){
	playerOneScore.textContent = 0;
	playerTwoScore.textContent = 0;
	gameLength.textContent = "";
	input.value = 0;
	p.textContent = "";
	numP1 = 0;
	numP2 = 0;
}

