class Node {
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
		let newNode = new Node(value);
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

			if (found) return true;

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

}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)