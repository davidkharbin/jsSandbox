// no need indices or other methods that come along with an array

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(value) {
		let newNode = new Node(value);

		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let cache = this.first;
			this.first = newNode;
			this.first.next = cache;
		}

		this.size++;
		return this.size;
	}

	pop() {
		if (this.size === 0) return null;

		let cache = this.first;

		if (this.size === 1){
			this.last = null;
		}
		
		this.first = this.first.next;
		this.size--;
		return cache.value;
	}
}

var stack = new Stack();
stack.push(0)
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.push(7)
stack.push(8)
stack.push(9)
stack.push(10)
