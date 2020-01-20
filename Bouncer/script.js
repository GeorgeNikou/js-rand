// bouncer conditions
var age  = prompt("Let me see some ID?");

if(age <= 0) {
	alert("ERROR!");
}
else {
	if (age < 18) {
		alert("Beat it kid, you're too young to enter.");
		checkOdd(age);
		square(age);
	}
	else if(age == 21) {
		alert("HAPPY BIRTHDAY, you're now legal!");
		checkOdd(age);
		square(age);
	}
	else if (age >= 18 && age < 21) {
		alert("You can enter but you can't drink bucko!");
		checkOdd(age);
		square(age);
	}
	else {
		alert("You can come in and drink all you want. Enjoy your stay!");
		checkOdd(age);
		square(age);
	}
}


function checkOdd (age) {
	if (age % 2 == 0) {
		//Do nothing
	}
	else {
		alert("That's an odd age number");
	}
}

function square (age) {
	if (age % Math.sqrt(age) === 0) {
		alert("That's a PERFECT square!");
	}
}



// teachers code
// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));
 
// If age is negative
if(age < 0) {
 console.log("Come back once you're out of the womb");
}
 
// If age is 21  
if(age === 21) {
 console.log("Happy 21st Birthday!");
}
 
// If age is odd
//(not evenly divisible by two)
if(age % 2 !== 0) {
 console.log("Your age is odd!");
}
 
// // If age is a perfect square
if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}