// Solution 1: Optimal Time and Space Complexity
// Time Complexity - O(n)
// Space Complexity- O(1)

class LinkedList {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

function reverseLinkedList(head) {
	let curPtr = head;
	let nextPtr = curPtr.next;
	curPtr.next = null;

	while (nextPtr !== null) {
		let temp = nextPtr.next;

		nextPtr.next = curPtr;
		curPtr = nextPtr;
		nextPtr = temp;
	}
	return curPtr;
}

/* Notes
Reverse in place:

null <-			 1		 	   		 2		 ->		 3		 ->		 null
             ^						 ^           ^
             curptr			 nxtptr			 temp
   
   LOOP

null <-			 1		 	<-  	 2		 		 3		 ->		 null
             				 			 ^         ^
             			 			 	 |				 |
                                     temp
												 curptr			 nxtptr
                         
null <-			 1		 	<-  	 2		<- 	 3		  		 null
             				 			           ^					 ^	
             			 			 	  				 |					 |
                                     
												      			             temp                         
                                     curptr      nxtptr
                                     
 null <-			 1		 	<-  	 2			<- 	 3
 
 		NEXTPTR === NULL: END LOOP
 
 
 final ==>>     3 		->		 2  ->		 1 ->		 null
*/
