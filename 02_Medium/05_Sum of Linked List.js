// Solution 1: 
// Time Complexity: O(n)
// Space Complexity: O(n+m)
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let arr1 = [];
  let arr2 = [];
  let cur1 = linkedListOne;
  let cur2 = linkedListTwo;

  // Populate arrays
  while (!(cur1 === null && cur2 === null)) {
    
    if (cur1 !== null) {
      arr1.push(cur1.value);
      cur1 = cur1.next;
    }

    if (cur2 !== null) {
      arr2.push(cur2.value);
      cur2 = cur2.next;
    }
    
  }

  // Reverse, join, and convert to numbers for both arrays -> sum -> reverse -> create LL
  num1 = Number(arr1.reverse().join(''));
  num2 = Number(arr2.reverse().join(''));

  // Sum and Reverse
  let sum = num1 + num2;
  sum = [...String(sum)].reverse();
  
  // Create new linked list with the reversed sum
  let head = new LinkedList(Number(sum[0]));
  let cur = head;

  for (let i = 1; i < sum.length; i++) {
    cur.next = new LinkedList(Number(sum[i]))
    cur = cur.next;
  }

  return head;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
