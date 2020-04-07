
var long_text = document.querySelector('#long_text');
var sort_text = document.querySelector('#sort_text');
var result = document.querySelector('#result');

sort_text.addEventListener("keypress", function () {

	var match = long_text.value.indexOf(sort_text.value);

	if (match === -1) {

		result.innerHTML = `The value ${sort_text.value} was not found`;
	}

	else {
		result.innerHTML = `The value ${sort_text.value} was found at ${match}`;
	}

});




