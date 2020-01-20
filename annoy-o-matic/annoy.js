var bool = true;
var input;

while(bool) {
	input = prompt("Are we there yet!?");

	if(input === null){
		bool = false;
	}
	else{
		if(input.toLowerCase().includes("yeah") || input.toLowerCase().includes("ya")) {
			alert("Yay, we finally made it!");
			bool = false;
		}	
	}
}