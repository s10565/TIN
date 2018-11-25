class Student{
	constructor(name, lastname, index, grades) {
		this.name = name;
		this.lastname = lastname;
		this.index = index;
		this.grades = grades;
	}
	
	average() {
		var temp = this.grades.reduce((a, b) => a += b);
		return Math.round(temp/this.grades.length * 100)/100;
	}
	
	showInfo() {
		document.getElementById("sName").innerHTML = this.name+"\n "+this.lastname+", indeks: "+this.index+", oceny: "+this.grades+", srednia: "+this.average();
	}
	
	addGrade() {
		if(document.getElementById("newGrade").value >= 2 && document.getElementById("newGrade").value <= 5){
			this.grades.push(Number(document.getElementById("newGrade").value));
			this.showInfo();
			document.getElementById("newGradeMsg").innerHTML = "";
		}else{
			document.getElementById("newGradeMsg").innerHTML = "Ocena musi być z zakresu 2-5";
		}
	}
	
	changeInfo() {
		var n,l,i;
		n = document.getElementById("newName").value;
		l = document.getElementById("newLastName").value;
		i = document.getElementById("newIndex").value;
		
		if(n !== "" && n !== this.name){
			this.name=n;
			document.getElementById("newNameMsg").innerHTML = "Imię zostało zmienione";
		}else{
			document.getElementById("newNameMsg").innerHTML = " <- Imie";
		}
		
		if(l !== "" && l !== this.lastname){
			this.lastname=l;
			document.getElementById("newLastNameMsg").innerHTML = "Nazwisko zostało zmienione";
		}else{
			document.getElementById("newLastNameMsg").innerHTML = " <- Nazwisko";
		}
		
		if(i !== "" && i !== this.indeks){
			this.index=i;
			document.getElementById("newIndexMsg").innerHTML = "Indeks został zmieniony";
		}else{
			document.getElementById("newIndexMsg").innerHTML = " <- indeks";
		}
		this.showInfo();
	}
};


var student = new Student("Dawid", "Drozd", "s10565", [5,5,5,5]);
student.showInfo();