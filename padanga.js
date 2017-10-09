document.getElementById('ratas').addEventListener ("change", calc);
document.getElementById('padanga').addEventListener ("change", calc);
document.getElementById('arka').addEventListener ("change", calc);
document.getElementById('add').addEventListener ("click", addToTable);

function addToTable () {
	var table = document.getElementById("rows");
	var tr = table.insertRow(0);
	
	var td0 = tr.insertCell(0);
	var td1 = tr.insertCell(1);
	var td2 = tr.insertCell(2);
	var td3 = tr.insertCell(3);

	td0.innerHTML = document.getElementById('ratas').value *2.54;
	td1.innerHTML = document.getElementById("padanga").value/ 10 * 2;
	td2.innerHTML = document.getElementById('result').value;
	td3.innerHTML = document.getElementById('arka').value;
	

	//var table = document.getElementById("rows");
	//table.innerHTML += "<tr><td>1</td><td>2</td><td>3</td><td>4</td></tr>"
}

function calc() {

	var div_result = document.getElementById('result');
	var ratas = document.getElementById("ratas");
	var padanga = document.getElementById("padanga");
	var arka = document.getElementById("arka");
	var ratas = parseInt(ratas.value) * 2.54;
	var padanga = parseInt(padanga.value) / 10 * 2;
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
