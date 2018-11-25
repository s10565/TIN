console.log('--------------------------Punkt k)-------------------------')

var Person = {
	name: 'John',
	age: 28,
	gender: 'man',
	displayType: function() {
		console.log(this.name+' is '+this.age+' years old '+this.gender);
	},
	birthday: function() {
		this.age++;
	}
};

function personInfo(n){
	console.log(n.name+' - '+typeof n.name);
	console.log(n.age+' - '+typeof n.age);
	console.log(n.gender+' - '+typeof n.gender);
}

Person.displayType();
Person.birthday();
Person.displayType();

personInfo(Person);