//parent <div> tag
var element = document.getElementById("divExo1");


//adding simple text to <div> parent
document.getElementById("divExo1").append("The ");


//adding <b> element with text
var b = document.createElement("b");
var bNode = document.createTextNode("World Wide Web Consortium");
b.appendChild(bNode);
element.appendChild(b);


//adding simple text to <div> parent
document.getElementById("divExo1").append(", abbreviated to ");


//adding <strong> element with text
var s = document.createElement("strong");
var sNode = document.createTextNode("W3C");
s.appendChild(sNode);
element.appendChild(s);


//adding simple text to <div> parent
var test = document.getElementById("divExo1").append(", is a ");


//adding <a> element with "href" setAttributes
var anchor1 = document.createElement("a");
anchor1.setAttribute("href"," http://en.wikipedia.org/wiki/Standards_organization");
anchor1.setAttribute("target", "_blank");
anchor1.setAttribute("title", "Standards organization");
anchor1.innerHTML = "Standards Organization";
element.appendChild(anchor1);


//adding simple text to <div> parent
document.getElementById("divExo1").append(" A ");


//adding <i> element with text
var i = document.createElement("i");
var iNode = document.createTextNode("non-profit");
i.appendChild(iNode);
element.appendChild(i);


//adding simple text to <div> parent
document.getElementById("divExo1").append("  responsible for promoting the compatibility of the technologies ");


//adding <a> element with "href" setAttributes
var anchor2 = document.createElement("a");
anchor2.setAttribute("href"," http://en.wikipedia.org/wiki/Standards_organization");
anchor2.setAttribute("target", "_blank");
anchor2.setAttribute("title", "World Wide Web.");
anchor2.innerHTML = "World Wide Web.";
element.appendChild(anchor2);


//adding <p> element with text
var p = document.createElement("p");
var pNode = document.createTextNode("George Bourisquot");
p.appendChild(pNode);
p.style.textAlign = 'right';
element.appendChild(p);





