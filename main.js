//create app 

var app = (function(){

	var elements = {
		inputField : document.querySelector('.write'),
		inputSubmit : document.querySelector('.submit-note'),
		noVeggieFound : document.querySelector('.no-notes-found'),

	};

	var submitRequest = function() {
		// read the user's input and perform an Ajax Call
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
	};

	var attachEvents = function() {
		// start listening to all the clicks etc.
		elements.inputSubmit.addEventListener('click', function(event){
			event.preventDefault();
			var fieldValue = elements.inputField.value;
		})
	};

	var Model = function() {
		// Model implementation for a single result
	};

	var View = function() {
		// View implementation for a single result
	};

});

	results = [];





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


