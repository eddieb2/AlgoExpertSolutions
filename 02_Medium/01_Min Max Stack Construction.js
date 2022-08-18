// Solution 1: Using Arrays - Optimal Time and Space Complexity (class methods)
// Time Complexity: O(1)
// Space Complexity: O(1)
class MinMaxStack {
  constructor () {
    this.stack = []; 
    this.max = []; // Stores all maximum numbers from each inserts
    this.min = []; // Stores all minimum numbers from each inserts
    this.length = 0;
  }
  
  peek() {
    if (this.length === 0) {
      return null;
    } else {
      return this.stack[this.length-1]
    }
  }

  pop() { 
    if (this.length === 0) {
      return null;
    } else {
      let removedElement = this.stack.pop();
      this.length--;
      
      if (removedElement === this.max[this.max.length-1] && removedElement === this.min[this.min.length-1]) {
        this.max.pop();
        this.min.pop();
      } else if ( removedElement === this.max[this.max.length-1] ) { // check if the element we're popping off the stack is the current min or max
        this.max.pop();
      } else if ( removedElement === this.min[this.min.length-1] ) {
        this.min.pop();
      }
      
      return removedElement;
    }
  }

  push(number) {
    
    // Case: Min/max stacks are empty - the first number into "stack" is the current min and max.
    if ( (this.max[this.max.length-1] === undefined && this.max[this.max.length-1] === undefined) ) {
      this.max.push(number);  
      this.min.push(number);
      
    // Case: Min/max stacks are not empty - the incoming number is equal to both the current min & max numbers
    // This keeps us from losing the current min value. It would otherwise be skipped without this.
    // This covers the situation where back to back identical numbers are pushed into the stack.
    } else if ( number === this.max[this.max.length-1] && number === this.min[this.min.length-1] ) {
      this.max.push(number);  
      this.min.push(number);
      
    // Case: Min/max stacks are not empty - self explanatory
    } else if ( number >= this.max[this.max.length-1] )  {
      this.max.push(number);  
      
    // Case: Min/max stacks are not empty - self explanatory
    } else if ( number <= this.min[this.min.length-1] ) {
      this.min.push(number);  
    }

    this.stack.push(number);
    this.length++;
    
  }

  getMin() { // current min is the last element of the min array
    return this.min[this.min.length-1];
    
  }

  getMax() { // current max is the last element of the max array
    return this.max[this.max.length-1];
  }
  
  
}

/* Notes
- Better to use a hashmap
*/