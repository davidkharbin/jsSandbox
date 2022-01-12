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
}
var dll = new DoublyLinkedList();
dll.push(1)
dll.push(2)
dll.push(3)
dll.push(4)


module.exports = { Node, DoublyLinkedList }