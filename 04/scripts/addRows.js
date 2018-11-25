function addRowByForm(){
	var tab = document.getElementById("jsTable");
	var toAdd = document.getElementById("rowForm").value;
	
	for(var i=0;i<toAdd;i++){
		tab.insertRow(tab.rows.length).insertCell(0);
	}
}