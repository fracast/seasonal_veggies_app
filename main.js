/*	
	create app
	so i guess in the beginning I will have elements?
*/ 

var app = (function(){

	var elements = {
		inputField : document.querySelector('.write'),
		inputSubmit : document.querySelector('.submit-note'),
		noVeggieFound : document.querySelector('.no-notes-found'),

	};

	var submitRequest = function() {
		// read the user's input and perform an Ajax Call
		// not sure if the URL is right to be honest

		render = function(){
			console.log('render');
			$ajax({
				url: 'localhost:8888/wordpress/api',
				type: 'POST',
				dataType: 'json'
			})
			.done(function(data){
				console.log(data);
			})
			.fail(function(jqxhr, textStatus, error){
				var err = textStatus + ',' + error;
				console.log('Request for API failed: ' + err);
			});
		},
	};

	var render = function() {
		// print everything on the screen
		// visualize months when produce is in season 
	};

	var attachEvents = function() {
		// start listening to all the clicks etc.

		elements.inputSubmit.addEventListener('click', function(){

			//check which month it is
			var presentMonth = new Date();
				presentMonth.getMonth();

			if (presentMonth == veggieMonth){	 

				var outerDiv = document.getElementById("season");
				var newText = outerDiv.innerHTML="<h1>YES</h1>";

			}else{

				var outerDiv = document.getElementById("season");
				var newText = outerDiv.innerHTML="<h1>NO</h1>";
			}
			
			//innerHTML.append.child(outerDiv);	

			//now let's put the event associated with the 	
		})
	};

	var Model = function() {
		// Model implementation for a single result
	};

	var View = function() {
		// View implementation for a single result
	};

});





//JSON stuff

request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400){
    // Success!
    data = JSON.parse(request.responseText);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();

var request = new XMLHttpRequest();
request.open('POST', '/my/url', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.send(data);


