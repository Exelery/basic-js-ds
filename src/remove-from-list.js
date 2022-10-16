const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList( l, k) {
  let node = l
  let last 
  while(node.value == k){
    l = node.next
    node = node.next
  }
  // if(node && node.value == k){
  //   return node.next
  // }

  do{
    if(last && node.value == k){
      last.next = node.next
      
    }else{
      last = node
    }
    node = node.next
    
  }while(node)
  
  return l
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  removeKFromList
};


function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

const initial = convertArrayToList([1, 2, 3]);
console.log(removeKFromList(initial, 3))