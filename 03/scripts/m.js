console.log('--------------------------Punkt m)-------------------------')

function sPrototype() {
	this.subjects = ['TIN', 'PRI', 'MAS'];
};

function StudentPrototype(name, lastname, index) {
	this.name = name;
	this.lastname = lastname;
	this.index = index;
	sPrototype.call(this)
};

StudentPrototype.prototype = Object.create(sPrototype.prototype);

var student1 = new StudentPrototype('Jan', 'Nowak', 001);
var student2 = new StudentPrototype('Adam', 'Nowak', 002);
console.log(student1);
console.log(student2);