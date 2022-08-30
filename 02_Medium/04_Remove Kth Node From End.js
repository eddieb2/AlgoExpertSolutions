// Solution 1: Optimal Time and Space Complexity
// Time Complexity: O(2n) = O(n)
// Space Complexity: O(1)
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  
  let llLength = getLength(head); // O(n)
  let position = (llLength - k) + 1;  
  
   console.log(llLength, position) 

  let cur = head;
  let prev = null;
  let count = 1;
  
  while (cur !== null) { // O(n)
    
    /* CASE: Remove element that is the head 
         
    The if statement directly below is a hack. 
    Ideally you would just change the head to the next pointer and return the head.
    Instead, I changed the head's value to the next value,
    then remove the next node from the linked list. 
     */
    if (count === 1 && count === position) {
      cur.value = cur.next.value;
      cur.next = cur.next.next;
      return;
    }

    // CASE: Remove element that is not the head
    if (count === position && prev !== null) {
      prev.next = cur.next;
      return;
    }

    
    count++;
    prev = cur;
    cur = cur.next;
  }
}

function getLength(head) {
  let cur = head;
  let count = 0;
  
  while (cur !== null) {
    count++;
    cur = cur.next;
  }
  
  return count;
}
// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;


/*
loop and find the length
calculate the position = length - k + 1
loop again and remove the element from that position
*/
