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
		if (index === this.length) return !!this.push(value);
		if (index === 0) return !!this.unshift(value);

		let newNode = new Node(value);
		let prevNode = this.get(index - 1);
		let cache = prevNode.next;

		prevNode.next = newNode;
		newNode.next = cache;

		this.length++;
		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();

		let prevNode = this.get(index - 1);
		let removed = prevNode.next;

		prevNode.next = removed.next;
		this.length--;

		return removed;
	}

	reverse() {
		let cacheNode = this.head;
		this.head = this.tail;
		this.tail = cacheNode;

		let next;
		let prev = null;
		
		for (let i = 0; i < this.length; i++){
			next = cacheNode.next;
			cacheNode.next = prev;
			prev = cacheNode;
			cacheNode = next;
		}
	}

	print() {
		let arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.value);
			current = current.next;
		}
		console.log(arr);
	}
}



var ll = new SinglyLinkedList();

ll.push(1)
ll.push(2)
ll.push(3)
ll.push(4)

