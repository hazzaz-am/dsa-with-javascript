class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class BookStack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	push(value) {
		const book = new Node(value);

		if (!this.top) {
			this.top = book;
			this.bottom = book;
		} else {
			const prevTop = this.top;
			this.top = book;
			this.top.next = prevTop;
		}
		this.length++;
	}

	pop() {
		if (!this.top) {
			return null;
		}

		if (this.length === 1) {
			this.top = null;
			this.bottom = null;
		} else {
			const nextTop = this.top.next;
			this.top = nextTop;
		}
		this.length--;
	}
}

const bookStore = new BookStack();
bookStore.push("book-1");
bookStore.push("book-2");
bookStore.push("book-3");
bookStore.pop();
console.log(bookStore);
