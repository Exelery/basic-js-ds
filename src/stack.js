const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(){
    this.stack = []
  }
  push( element ) {
    // throw new NotImplementedError('Not implemented');
    this.stack.push(element)
    // remove line with error and write your code here
  }

  pop() {
    return this.stack.pop()
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  peek() {
    return this.stack[this.stack.length-1]
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack
};

const stack = new Stack();
// console.log(stack.peek())
  stack.push(5);
  stack.push(6);
  stack.push(7);

  console.log(stack.peek())
  console.log(stack.pop())
  console.log(stack.peek())