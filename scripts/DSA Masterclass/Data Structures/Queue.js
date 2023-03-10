class QueueNode {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(value) {
		let newNode = new QueueNode(value);

		if (this.size === 0){
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size++;
		return newNode;
	}

	dequeue(){
		if (this.size === 0) return null;
		
	  let cache = this.first;
		if (this.size === 1){
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

let q = new Queue();

q.enqueue(0);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
