class Node {
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
		let currentNode = this.head;
		const newNode = new Node(value);
		newNode.next = currentNode;
		this.head = newNode;
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

const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(40);
// list.pop();
// list.shift();
list.unShift(30);
list.unShift(50);
console.log(list.showList());
console.log(list);
