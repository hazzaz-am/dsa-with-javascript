class Node1 {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	isEmpty() {
		return this.length === 0;
	}

	push(value) {
		const newNode = new Node(value);

		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}

	pop() {
		if (!this.head) {
			return null;
		}

		if (this.length === 1) {
			let lastNode = this.head.next;
			this.head = null;
			this.tail = null;
			this.length = 0;
			return lastNode;
		}

		let newLastNode;
		let currentNode = this.head;

		while (currentNode) {
			if (currentNode.next === this.tail) {
				newLastNode = currentNode;
				break;
			}
			currentNode = currentNode.next;
		}

		newLastNode.next = null;
		this.tail = newLastNode;
		this.length--;
	}

	shift() {
		if (!this.head) {
			return null;
		}

		if (this.length === 1) {
			this.tail = null;
		}

		let currentNode = this.head;
		this.head = currentNode.next;
		this.length--;
	}

	unShift(value) {
		const newNode = new Node(value);
		const currentNode = this.head;

		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head = newNode;
			this.head.next = currentNode;
		}
		this.length++;
	}

	showList() {
		let arr = [];
		let currentNode = this.head;
		while (currentNode) {
			arr.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return arr;
	}
}

class Node2 {
	constructor(value) {
		this.next = null;
		this.value = value;
	}
}

class SinglyLinkedList2 {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	isEmpty() {
		return this.length === 0;
	}

	push(value) {
		const newNode = new Node(value);

		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}

	unShift(value) {
		const newNode = new Node(value);
		const currentNode = this.head;

		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head = newNode;
			this.head.next = currentNode;
		}
		this.length++;
	}

	pop() {
		if (!this.head) {
			return null;
		}

		if (this.length === 1) {
			let newLastNode = this.head.next;
			this.head = null;
			this.tail = null;
			this.length = 0;
			return newLastNode;
		}

		let currentNode = this.head;
		let newLastNode;

		while (currentNode) {
			if (currentNode.next === this.tail) {
				newLastNode = currentNode;
				break;
			}
			currentNode = currentNode.next;
		}

		newLastNode.next = null;
		this.tail = newLastNode;
		this.length--;
	}

	shift() {
		if (this.length === 1) {
			this.tail = null;
		}

		let currentNode = this.head;
		this.head = currentNode.next;
		this.length--;
	}

	showList() {
		let arr = [];
		let currentNode = this.head;

		while (currentNode) {
			arr.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return arr;
	}
}

class Node3 {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class AnotherSinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	isEmpty() {
		return this.length === 0;
	}

	unShift(value) {
		const newNode = new Node3(value);

		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return newNode;
		}
		let currentNode = this.head;
		this.head = newNode;
		this.head.next = currentNode;
		this.length++;
	}

	shift() {
		if (this.isEmpty()) {
			return null;
		} else if (this.length === 1) {
			const lastNode = this.head;
			this.head = null;
			this.tail = null;
			this.length = 0;
			return lastNode;
		}

		let currentNode = this.head;
		this.head = currentNode.next;
		this.length--;
	}

	push(value) {
		const newNode = new Node3(value);

		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return newNode;
		}

		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	pop() {
		if (this.isEmpty()) {
			return null;
		} else if (this.length === 1) {
			const lastNode = this.head;
			this.head = null;
			this.tail = null;
			this.length = 0;
			return lastNode;
		}

		let currentNode = this.head;
		let lastNode;

		while (currentNode) {
			if (currentNode.next === this.tail) {
				lastNode = currentNode;
				break;
			} else {
				currentNode = currentNode.next;
			}
		}

		lastNode.next = null;
		this.tail = lastNode;
		this.length--;
	}

	showList() {
		let listArr = [];
		let currentNode = this.head;
		while (currentNode) {
			listArr.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return listArr;
	}
}

const list = new AnotherSinglyLinkedList();
list.unShift(40);
list.unShift(50);
list.unShift(60);
list.push(10);
list.push(20);
list.push(30);
list.pop();
list.shift();
console.log(list.showList());
console.log(list.isEmpty());
console.log(list);
