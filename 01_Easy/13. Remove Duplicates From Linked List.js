// Solution 1: Optimal Time and Space Complexity
// Time Complexity - O(n)
// Space  Complexity - O(1)
class LinkedList {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

function removeDuplicatesFromLinkedList(linkedList) {
	let curPtr = linkedList;
	let nextPtr = curPtr.next;

	while (nextPtr != null) {
		let temp = nextPtr.next;

		if (curPtr.value === nextPtr.value) {
			// duplicate -- skip it and keep checking
			if (nextPtr.next === null) {
				curPtr.next = null;
			}
			nextPtr = temp;
		} else if (curPtr.value !== nextPtr.value) {
			// no duplicate -- break link, shift curPtr to nextPtr pos. and shift nextPtr 1 right
			curPtr.next = nextPtr; // break the link
			curPtr = nextPtr;
			nextPtr = temp; // shift 1 right
		}
	}

	// print(linkedList)
	return linkedList;
}

function print(linkedList) {
	let cur = linkedList;

	while (cur != null) {
		let temp = cur;
		console.log(cur);
		cur = temp.next;
	}
}
