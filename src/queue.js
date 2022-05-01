const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  head = null;
  last = null;

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (this.head === null) {
      this.head = new ListNode(value);
    } else if (this.last == null) {
      this.head.next = new ListNode(value);
      this.last = this.head.next;
    } else {
      this.last.next = new ListNode(value);
      this.last = this.last.next;
    }
  }

  dequeue() {
    const currentHead = this.head.value;
    this.head = this.head.next;
    return currentHead;
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.last);
console.log(queue.dequeue());

//console.log(queue.getUnderlyingList());
//console.log(queue.dequeue());
//console.log(queue.last);

module.exports = {
  Queue,
};
