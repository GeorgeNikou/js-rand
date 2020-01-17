//parent <div> tag element
var element = document.getElementById("divExo2");


//creating <h2> tag element
var hTwo = document.createElement("h2");
var node1 = document.createTextNode("Languages base on ECMAScript :");
hTwo.appendChild(node1);
hTwo.style.marginTop = '50px';
element.appendChild(hTwo);

//=====================================================================================================================//
//=====================================================================================================================//
//=====================================================================================================================//

//creating <ul> tag element
var unorderedList = document.createElement("ul");

//creating <il> to <span> to <b> tag element
var list1 = document.createElement("li");
var spanElement = document.createElement("span");
spanElement.style.color = 'green';
spanElement.style.textDecoration = 'underline';
var b1 = document.createElement("b");
b1.innerHTML = "JavaScript";
spanElement.appendChild(b1);
list1.appendChild(spanElement);


//creating <il> tag element
var list2 = document.createElement("li");
list2.innerHTML = "JScript";


//creating <il> tag element
var list3 = document.createElement("li");
list3.innerHTML = "ActionScript";


//creating <il> tag element
var list4 = document.createElement("li");
var b2 = document.createElement("b");
b2.innerHTML = "MushuScript";
list4.appendChild(b2);

//creating <il> tag element
var list5 = document.createElement("li");
list5.innerHTML = "EX4";

//adding all <il> elements to <ul> and then to parent element
unorderedList.appendChild(list1);
unorderedList.appendChild(list2);
unorderedList.appendChild(list3);
unorderedList.appendChild(list4);
unorderedList.appendChild(list5);
element.appendChild(unorderedList);

//=====================================================================================================================//
//=====================================================================================================================//
//=====================================================================================================================//

var para1 = document.createElement("p");
var italic1 = document.createElement("i");
italic1.innerHTML = "Other languages to come!";
para1.appendChild(italic1);

document.body.appendChild(para1);






//--------------------------------------------------\\
//-------------------REFERENCE---------------------\\
//--------------------------------------------------\\

/*var node = document.createElement("DIV");  
var textNode = document.createTextNode("My Div content");	
node.appendChild(textNode);
document.body.appendChild(node);*/

//--------------------------------------------------\\
//--------------------------------------------------\\
//--------------------------------------------------\\


