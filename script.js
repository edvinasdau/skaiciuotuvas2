function calc() {

var div_result = document.getElementById('result');
var input_arg1 = document.getElementById('arg1');
var input_arg2 = document.getElementById('arg2');
var input_operation = document.getElementById('operation');


	var arg1 = 	parseInt(input_arg1.value) || 0;
	var arg2 = 	parseInt(input_arg2.value) || 0;

	if (input_operation.value == "add"){
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

}

document.getElementById("operation").addEventListener("click", calc);
document.getElementById("arg1").addEventListener("input", calc);
document.getElementById("arg2").addEventListener("input", calc);