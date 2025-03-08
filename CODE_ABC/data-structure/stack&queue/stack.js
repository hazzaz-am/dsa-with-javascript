class Stack {
	constructor() {
		this.bucket = [];
	}

	push(value) {
		this.bucket.push(value);
		return this.bucket;
	}

	pop() {
		this.bucket.pop();
		return this.bucket;
	}

	lookUp() {
		return this.bucket[this.bucket.length - 1];
	}
}

// const stack = new Stack();
console.log(stack.push(5));
console.log(stack.push(34));
console.log(stack.push(4));
console.log(stack.pop());
console.log(stack.lookUp());

class AnotherStack {
	constructor() {
		this.storage = {};
		this.count = 0;
	}

	push(value) {
		this.count++;
		this.storage[this.count] = value;
		return this.storage;
	}

	pop() {
		delete this.storage[this.count];
		this.count--;
		return this.storage;
	}

  peek () {
    return this.storage[this.count]
  }
}

const stack= new AnotherStack();
console.log(stack.push(4));
console.log(stack.push(5));
console.log(stack.push(6));
console.log(stack.push(7));
console.log(stack.pop());
console.log(stack.peek());
