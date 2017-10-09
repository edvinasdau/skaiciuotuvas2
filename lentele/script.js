function add () {
	var table = document.getElementById("rows");
	var tr = table.insertRow();

	var td0 = tr.insertCell(0);
	var td1 = tr.insertCell(1);
	var td2 = tr.insertCell(2);
	var td3 = tr.insertCell(3);
	var td4 = tr.insertCell(4);
	var td5 = tr.insertCell(5); 
	var d = new Date();
	var m = d.getMonth();
	var m = m+1;

	td0.innerHTML = document.getElementById('pk').value;
	td1.innerHTML = document.getElementById('pavad').value;
	td2.innerHTML = document.getElementById('apr').value;
	td3.innerHTML = document.getElementById('kaina').value;
	td4.innerHTML = document.getElementById('kiekis').value;
	td5.innerHTML = d.getFullYear() + "-" + m + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();


}

function sleep (ms) {
	return new Promise(resolve=> setTimeout(resolve, ms));
}
async function showtime () {
	while (true) {
		var d = new Date();
		console.log(d);
		await sleep (1000);
	}
}
//showtime()