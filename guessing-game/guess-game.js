var bool = true;
var num;
var input;
var replay;
num = Math.floor(Math.random() * 10) + 1; //Number between 10


while (bool) {	
	input = prompt("Guess what number im thinking of?(between 1 and 10)");

	// too low
	if (input < num) {
		console.log("Try higher.");
	}
	// too high
	else if (input > num) {
		console.log("Try lower.");
	}
	// player wins
	else if (input == num) {
		console.log("DING DING DING! You guessed my number!");
		bool = false;

		replay = confirm("Wanna play again?");
		// play again?
		if (replay) {
			num = Math.floor(Math.random() * 10) + 1;
			bool = true;
		}
		else {
			console.log("Thank you for playing. Goodbye!");
			bool = false;
		}
	}
}