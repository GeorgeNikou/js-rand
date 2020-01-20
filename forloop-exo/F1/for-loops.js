// Print all number between -10 and 19
console.log("Print all number between -10 and 19");
for(var count = -10; count <=19 ; count++){
	console.log(count);
}console.log("\n");

// Print all even number between 10 and 40
console.log("Print all even number between 10 and 40");
for(var count = 10; count <= 40 ; count++){
	if(count % 2==0){
		console.log("even numbers: " + count);
	}
}console.log("\n");

// Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");
for(var count = 300; count <= 333 ; count++){
	if(count % 2!=0){
		console.log("odd numbers: " + count);
	}
}console.log("\n");

// Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
for(var count = 5; count <=50; count++){
	if(count % 3==0 && count % 5==0){
		console.log("div, 3/5: " + count);
	}
}console.log("\n");