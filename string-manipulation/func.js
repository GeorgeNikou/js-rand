// Write a function isEven() which takes a single numeric argument and returns true if the number is even and false if otherwise
var input = prompt("Please enter a number.");

console.log(isEven(input));
function isEven(number){
	if(number % 2 == 0){
		return "TRUE: " + number + " is an even number.";
	}
	else{
		console.log("FALSE: " + number + " is NOT an even number.")
	}
}




// Write a function factorial which takes a single numeric argument and returns the factorial of that number
factorial(0);

function factorial(number){
	var num = number;
	var result = number;

	if(number === 0){
		console.log(1)
	}
	else{
		for(var i = number; i > 0; i--){
			num--;
			result *= num;
			console.log(result);
		}
	}
}


// Change dahses with underscores
var input = prompt("Type any sentence with '-' dashes.");

alert(kebabToSnake(input));

function kebabToSnake(sentence){
	sentence = sentence.replace(/-/g, '_');
	return sentence;
}