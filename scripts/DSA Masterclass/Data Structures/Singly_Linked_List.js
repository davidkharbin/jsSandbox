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

	push(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;

		let current = this.head;
		let newTail = current;

		while (current.next) {
			newTail = current;
			current = current.next;
		}

		this.tail = newTail;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.head = null;
		}

		return current;
	}

	shift() {
		if (this.length === 0) return;

		let currentHead = this.head;
		this.head = currentHead.next;
		this.length--;

		if (this.length === 0) this.tail = null;

		return currentHead;
	}

	unshift(value) {
		let node = new Node(value);

		if (this.length === 0) {
			this.head = node;
			this.tail = node;
		}
		else {
			node.next = this.head;
			this.head = node;
		}
		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;

		let counter = 0;
		let current = this.head;
		while (counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}

	set(index, value) {
		let setNode = this.get(index);
		if (setNode === null) return false;

		setNode.value = value;
		return true;
	}

	insert(index, value) {
		if (index < 0 || index > this.length) return false;
		if (index ===  this.length) return !!this.push(value);
		if (index === 0) return !!this.unshift(value);
	
		let newNode = new Node(value);
		let prevNode = this.get(index - 1);
		let cache = prevNode.next;

		prevNode.next = newNode;
		newNode.next = cache;

		this.length++;
		return true;
	}
}



var ll = new SinglyLinkedList();

ll.push(1)
ll.push(2)
ll.push(3)
ll.push(4)

