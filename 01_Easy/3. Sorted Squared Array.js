// ======================================================================================
// Solution 1
// O(n) + O(n log n) = O(n log n) 
// ======================================================================================

function sortedSquaredArray(array) {
  let sqrArr = [];
  let negFound = false;

  array.forEach(num => {                   // O(n)
    sqrArr.push(Math.pow(num, 2))          // O(1)

    if (num < 0) {
      negFound = true;               
    }
    
  })

  // If negative num is found, the array is unsorted.
  if (negFound) {
    sqrArr.sort((a,b) => {                 // O(n log n)
      return a-b;
    })
  }
  
  return sqrArr
}

/* --------- NOTES ---------
- Square each number in the array
- Sort if negative number is found
*/




// ======================================================================================
// Solution 2
// ======================================================================================

function sortedSquaredArray(array) {
  // Pointers
  let smallestIndex = 0;
  let largestIndex = array.length - 1;
  let position = array.length - 1;
  
  let sqNumArr = [];

  while (position > -1) { // Stop when we inserted the last element (from right to left)
    
    if (Math.abs(array[largestIndex]) > Math.abs(array[smallestIndex])) {
      sqNumArr[position] = Math.pow(array[largestIndex], 2);
      largestIndex--;
    } else {
      sqNumArr[position] = Math.pow(array[smallestIndex], 2);
      smallestIndex++;
    }

    position--;
  }

  // Final Array
  return sqNumArr;
}

/* --------- NOTES ---------
cases 
  - no negatives 
      -> iterate left to right & square all nums    
  - all negatives
      -> iterate in reverse & square
  - some negatives
      -> ????
      
  if we check cases, then we have to iterate through the array twice
  which will increase time complexity

  we need two pointers and position variable (tells us where to insert the element at in the new array)
    - largest number in array
    - smallest number in array
    
  check absolute value of largest and smallest num and see which is greatest
  	- abs(smallest) > abs(largest)? square it and insert into new array (reverse)
    		- increment smallest pointer
    - abs(largest) > abs(smallest)? square it and insert into new array (reverse)
    		- decrement largest pointer
    - decrement position
*/
