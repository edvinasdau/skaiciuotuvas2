function calc() {

	var div_result = document.getElementById('result');
	var ratas = document.getElementById("ratas");
	var padanga = document.getElementById("padanga");
	var arka = document.getElementById("arka");
	var ratas = parseInt(ratas.value) * 2.54;
	var padanga = parseInt(padanga.value) /10 * 2;
	var arka = parseInt(arka.value);
	var input_operation = document.getElementById('operation');
	div_result.innerHTML = ratas + padanga;

	if (arka-1 > ratas+padanga) {
		document.getElementById("result").innerHTML = "Telpa";
		document.getElementById("result").style.backgroundColor = "green";
	} else { 
		document.getElementById("result").innerHTML = "Netelpa !!!";
		document.getElementById("result").style.backgroundColor = "red";
	}

}
