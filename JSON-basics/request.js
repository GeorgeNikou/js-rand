var request = require('request');

request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});


// -----------------------------------------------------------------------------
// site for api - json placeholder
var request = require('request');

request('https://jsonplaceholder.typicode.com/users/2', function (error, response, body) {
  	if(!error && response.statusCode == 200){
		var parseData = JSON.parse(body);
		console.log(parseData.name + " is related to " + parseData.company.name + ".");
	}
});