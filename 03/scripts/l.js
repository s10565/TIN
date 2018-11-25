console.log('--------------------------Punkt l)-------------------------')

function Student(name, lastname, index, grades) {
	this.name = name;
	this.lastname = lastname;
	this.index = index;
	this.grades = grades;
	this.average = function() {
		var temp = this.grades.reduce((a, b) => a += b);
		return temp/this.grades.length;
	}
	this.displayType = function() {
		console.log('Student: '+this.name+' '+this.lastname+', average: '+this.average());
	}
};

var student1 = new Student('Dawid', 'Drozd', 's10565', [5,5,5,5]);
student1.displayType();
var student1 = new Student('Slaby', 'Student', 's00005', [1,2,3,4]);
student1.displayType();