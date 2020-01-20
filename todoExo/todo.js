
var list = new Array();
var input;
var bool = true;

window.setTimeout(function() {

	while(bool) {
		input = prompt("What would you like to do? (ie: New, List, delete, Quit)");

		if(input.toLowerCase() === "quit"){
			quitsApp();
		}		
		else if(input.toLowerCase() === "new"){
			createItem();
		}
		else if(input.toLowerCase() === "list"){
			listItem();
		}		
		else if(input.toLowerCase() === "delete"){
			deleteItem();
		}
		else{
			alert("Invalid entry! Please try again.");
		}
	}

}, 500);


// Quit from application
function quitsApp(){
	alert("Goodbye!");
	bool = false;
}


// Create a new list item
function createItem(){
	input = prompt("Type in the new item.");
	list.push(input);
}

// List item
function listItem(){
	for(var i = 0; i < list.length; i++){
		console.log("List item #" + i + ": " + list[i]);
	}
}

// Deletes list item
function deleteItem(){
	input = prompt("Please select the number associated with the item.");

	if(input < 0 || input > list.length-1){
		alert("Invalid index position. Item does not exist.");
	}
	else{
		var lastChance = prompt("Are you sure you want to delete ID#" + input + "? This action cannot be reversed.");
		if(lastChance.toLowerCase() === "yes" || lastChance.toLowerCase() === "ya" || lastChance.toLowerCase() === "yeah"){
			list.forEach(function(element, index){
				if(index == input){
					console.log("[ID#" + index + "] " + element + " has been successfully deleted.");
					list.splice(index, 1);
				}
			});
		}
		else{
			alert("No changes were made. Reverting back to main menu.");
		}
	}
}