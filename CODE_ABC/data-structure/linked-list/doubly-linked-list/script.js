class Node {
	constructor(value) {
		this.value = value;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
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
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
	}

	pop() {
		if (this.isEmpty()) {
			return null;
		}

		if (this.length === 1) {
			let lastNode = this.head;
			this.head = null;
			this.tail = null;
			this.length--;
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

	unShift(value) {
		const newNode = new Node(value);
		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return newNode;
		}

		let currentNode = this.head;
		currentNode.prev = newNode;
		newNode.next = currentNode;
		this.head = newNode;
		this.length++;
	}

	shift() {
		if (this.isEmpty()) {
			return null;
		}

		if (this.length === 1) {
			let lastNode = this.head;
			this.head = null;
			this.tail = null;
			this.length--;
			return lastNode;
		}

		let currentNode = this.head;
		this.head = currentNode.next;
		this.head.prev = null;
		return this.length--;
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

const list = new DoublyLinkedList();
// console.log(list.isEmpty())
list.push(10);
list.push(20);
list.push(30);
// list.pop();
list.unShift(30);
list.unShift(40);
list.pop();
list.shift();
console.log(list.showList());
console.log(list);
