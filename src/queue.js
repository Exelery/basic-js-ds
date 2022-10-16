const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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

  getUnderlyingList() {
    return this.queue
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value ) {
    let newNode = new ListNode(value)
    if(this.queue){
      let currentNode = this.queue
      while(currentNode.next){
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }else{
      this.queue = newNode
    }
    
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    if(this.queue){
      let answer = this.queue.value
      this.queue = this.queue.next
      return answer
    }
    
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
