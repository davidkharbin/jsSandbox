class QueueNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(value) {
		let newNode = new QueueNode(value);

		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size++;
		return newNode;
	}

	dequeue() {
		if (this.size === 0) return null;

		let cache = this.first;
		if (this.size === 1) {
			this.first = null;
			this.last = null;
			this.size--;
			return cache;
		} else {
			this.first = this.first.next;
			cache.next = null;
			this.size--;
			return cache;
		}
	}
}

class TreeNode {
	constructor(value) {
		this.count = 1;
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		let newNode = new TreeNode(value);
		let currentNode = this.root;
		let goLeft, goRight, areEqual;

		if (!this.root) {
			this.root = newNode;
			return this;
		}

		while (true) {
			goLeft = newNode.value < currentNode.value;
			goRight = newNode.value > currentNode.value;
			areEqual = newNode.value === currentNode.value;

			if (goLeft) {
				if (!currentNode.left) {
					currentNode.left = newNode;
					return this;
				} else {
					currentNode = currentNode.left;
				}
			}

			if (goRight) {
				if (!currentNode.right) {
					currentNode.right = newNode;
					return this;
				} else {
					currentNode = currentNode.right;
				}
			}

			if (areEqual) {
				currentNode.count++;
				return 'duplicate added';
			}
		}
	}

	find(value) {
		if (!this.root) return false;

		let currentNode = this.root;
		let less, greater, found;

		while (true) {
			less = value < currentNode.value;
			greater = value > currentNode.value;
			found = value === currentNode.value;

			if (found) return currentNode;

			if (less) {
				if (currentNode.left) {
					currentNode = currentNode.left;
				} else {
					return false;
				}
			}

			if (greater) {
				if (currentNode.right) {
					currentNode = currentNode.right;
				} else {
					return false;
				}
			}
		}
	}

	contains(value) {
		return !!this.find(value);
	}

	breathFirstSearch() {
		let node = this.root;
		let data = [];
		let queue = new Queue();
		queue.enqueue(node);

		while (queue.size > 0) {
			let val = queue.first.value.value;
			data.push(val);
			node = queue.dequeue();
			if (node.value.left) queue.enqueue(node.value.left);
			if (node.value.right) queue.enqueue(node.value.right);
		}
		return data;
	}

	depthFirstSearchPreOrder() {
		
	}
}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)