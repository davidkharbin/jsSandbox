class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
};

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		let newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length === 0) return undefined;

		let lastNode = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = lastNode.prev;
			this.tail.next = null;
			lastNode.prev = null;
		}
		this.length--;
		return lastNode;
	}

	shift() {
		if (this.length === 0) return undefined;

		let firstNode = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = firstNode.next;
			this.head.prev = null;
			firstNode.next = null;
		}
		this.length--;
		return firstNode;
	}

	unshift(value) {
		let newNode = new Node(value);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return this;
		}

		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let midpoint = this.length / 2;

		if (index < midpoint) {
			let counter = 0;
			let node = this.head;
			while (counter <= index) {
				if (counter === index) return node;
				node = node.next;
				counter++;
			}
		} else {
			let counter = this.length - 1;
			let node = this.tail;
			while (counter >= midpoint) {
				if (counter === index) return node;
				node = node.prev;
				counter--;
			}
		}
	}
}
var dll = new DoublyLinkedList();
dll.push(1)
dll.push(2)
dll.push(3)
dll.push(4)
dll.push(5)
dll.push(6)
dll.push(7)
dll.push(8)
dll.push(9)
dll.push(10)


module.exports = { Node, DoublyLinkedList }