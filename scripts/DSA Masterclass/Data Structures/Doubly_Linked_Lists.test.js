const { Node, DoublyLinkedList } = require('./Doubly_Linked_Lists.js');

describe('Doubly Linked List', () => {

	it('DoublyLinkedList should be a class constructor', () => {
		let newDLL = new DoublyLinkedList;
		expect(typeof DoublyLinkedList).toBe('function');
		expect(newDLL.constructor.name).toBe('DoublyLinkedList');
	})

});

describe('Node', () => {

	it('Node should be a class constructor', () => {
		let newNode = new Node;
		expect(typeof Node).toBe('function');
		expect(newNode.constructor.name).toBe('Node');
		expect(newNode.next).toBe(null);
	})

})