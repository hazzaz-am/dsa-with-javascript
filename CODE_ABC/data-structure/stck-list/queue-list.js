class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	enQueue(value) {
		const newPerson = new Node(value);
		if (!this.first) {
			this.first = newPerson;
			this.last = newPerson;
		} else {
			this.last.next = newPerson;
			this.last = newPerson;
		}
		this.length++;
	}

	deQueue() {
		if (!this.first) {
			return null;
		}

		if (this.length === 1) {
			this.last = null;
		} else {
			this.first = this.first.next;
		}
		this.length--;
	}
}

const person = new Queue();
person.enQueue("hazzaz");
person.enQueue("abdul");
person.enQueue("mannan");
person.deQueue();
console.log(person);
