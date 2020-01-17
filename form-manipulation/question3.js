//parent <div> element
var element = document.getElementById(" divExo3");


//created form element
var theForm = document.createElement("form");
theForm.setAttribute("enctype", "multipart/form-data");
theForm.setAttribute("method", "post");
theForm.setAttribute("action", "upload-php");


//created fieldset element
var theFieldSet = document.createElement("fieldset");


//created legend element
var theLegend = document.createElement("legend");
theLegend.innerHTML = "Upload an image";


//adding FORM, FIELDSET, LEGEND together
theFieldSet.appendChild(theLegend);
theForm.appendChild(theFieldSet);
element.appendChild(theForm);
//created <div> element and setAttribute of ID
var div1 = document.createElement("div");
div1.style.textAlign = 'center';
div1.setAttribute("id", "divtext");
theFieldSet.appendChild(div1);


//created <label> element
var label1 = document.createElement("label");
label1.innerHTML = "Image to upload: ";
label1.setAttribute("for", "inputUpload");
div1.appendChild(label1);


//created <input> element #1
var input1 = document.createElement("input");
input1.setAttribute("type", "file");
input1.setAttribute("name", "inputUpload");
input1.setAttribute("id", "inputUpload");
div1.appendChild(input1);


//created <br> element
var br1 = document.createElement("br");
var br2 = document.createElement("br");
div1.appendChild(br1);
div1.appendChild(br2);



//created <input> element #2
var input2 = document.createElement("input");
input2.setAttribute("type", "submit");
input2.setAttribute("value", "Send");
div1.appendChild(input2);

