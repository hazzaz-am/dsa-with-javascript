class Queue {
	constructor() {
		this.database = [];
	}

	push(value) {
		this.database.unshift(value);
		return this.database;
	}

	pop() {
		this.database.pop();
		return this.database;
	}

	peek() {
		return this.database[this.database.length - 1];
	}
}

const queue = new Queue();
console.log(queue.push(4));
console.log(queue.push(5));
console.log(queue.pop());
console.log(queue.peek());
