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
}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)