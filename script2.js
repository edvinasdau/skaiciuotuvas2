function calc() {

var div_result = document.getElementById('result');
var ratas = document.getElementById("ratas");
var padanga = document.getElementById("padanga");
var ratas = parseInt(ratas.value) * 2.54;
var padanga = parseInt(padanga.value) /10 * 2;
var input_operation = document.getElementById('operation');



	result = ratas + padanga;
	div_result.innerHTML = ratas + padanga;

	/*if (input_operation.value == "add"){
		result = arg1 + arg2;
	} else if (input_operation.value == "sub") {
		result = arg1 - arg2;
	} else if (input_operation.value == "mul") {
		result = arg1 * arg2;
	} else if (input_operation.value == "div") {
		result = arg1 / arg2;
	}

	if (result < 0) {
		div_result.style.BackgroundColor = "red";
	} else {
		div_result.style.BackgroundColor = "green";
	}

	div_result.innerHTML = result;

	if (arg2 == 0) {
		input_arg2.style.BackgroundColor = "red";
	} else {
		input_arg2.style.BackgroundColor = "white";
		div_result.innerHTML = arg1 / arg2;

	}
	//document object model
	//console.log(sum);
*/
}
