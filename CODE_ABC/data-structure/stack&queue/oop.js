class DataStructure {
	constructor() {
		this.storage = [];
	}

	insertFromEnd(value) {
		this.storage.push(value);
		return this.storage;
	}

	insertFromFront(value) {
		this.storage.unshift(value);
		return this.storage;
	}
}

const dsa = new DataStructure();
// console.log(dsa.insertFromEnd(4));
// console.log(dsa.insertFromFront(6));
// console.log(dsa.insertFromFront(7));
// console.log(dsa.insertFromEnd(7));

// Object.create() example a
// simple object with some properties
const coder = {
	isStudying: false,
	printIntroduction: function () {
		console.log(`My name is ${this.name}. Am I 
              studying?: ${this.isStudying}.`);
	},
};
// Object.create() method
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder"
me.name = "Mukul";

// Inherited properties can be overwritten
me.isStudying = true;

// me.printIntroduction();

console.log(me);
console.log(coder);
