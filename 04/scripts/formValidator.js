function validate(){
	var a,m,r;
	a = document.getElementById("ageForm").value;
	m = document.getElementById("mailForm").value;
	r = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	
	if (document.getElementById("nameForm").value === ""){
		document.getElementById("nameMsg").innerHTML = "Pole imię nie może być puste";
		return false;
	}else{
		document.getElementById("nameMsg").innerHTML = "";
	}
	
	if (isNaN(a)) {
		document.getElementById("ageMsg").innerHTML = "Wiek musi być liczbą";
		return false;
    }else{
		if (Number(a) <= 0) {
			document.getElementById("ageMsg").innerHTML = "Wiek musi być liczbą dodatnia wieksza od 0";
			return false;
		}
		else{
			document.getElementById("ageMsg").innerHTML = "";
		}
    }
		
	if (!r.test(m)){
		document.getElementById("mailMsg").innerHTML = "Niepoprawny adres mailowy";
		return false;
	}else{
		document.getElementById("mailMsg").innerHTML = "";
	}
	
	return true;
}