// Time Complexity: O(n)
// Space Complexity: O(1)
function findThreeLargestNumbers(array) {
  let largestNumsArr = []; // O(3)
  
  while (largestNumsArr.length !== 3) { // O(3) -> Worst Case: Maximum of 3 loops
    let numsFound = largestNumsArr.length;
    let largestNumIndex = 0;
    let largestNum = null;
    
    for (let i = 0; i < array.length; i++) { // O(n) -> Worst Case: Iterates through entire array once.
      
      if (array[i] > largestNum || largestNum === null) {
        largestNum = array[i] // Set current largest number
        largestNumIndex = i; // Save index
      }

      if (i === array.length-1) { // Once the end of the loop is reached:
        if (array[array.length-1] !== largestNum) { // Check if the largest number is in the last position
          let temp = array[array.length-1]; // Swap the largest number with the last index's number        
          array[largestNumIndex] = temp;
          array[array.length-1] = largestNum;
        }
        array.pop(); // O(1)
      }
      
    }
    
    largestNumsArr.push(largestNum); // O(1)
  }

  return largestNumsArr.reverse(); // O(n) Sorts in ascending order (descending order prior to the reverse) 
}


/*
FIND LARGEST NUM EACH PASS - MAX 3 passes
final arr = []

WHILE new array length !== 3

1.  [55, 43, 11, 3, -3, 10] -> l = 55 -> swap largest with last number
    [10, 43, 11, 3, -3, 55] -> swap & pop
    [10, 43, 11, 3, -3]
    final arr = [55]
    
2.  [10, 43, 11, 3, -3] -> l = 43
    [10, -3, 11, 3, 43] -> swap & pop
    [10, -3, 11, 3]
    final arr = [55, 43]
  
3.  [10, -3, 11, 3] -> l = 11
    [10, -3, 3, 11] -> swap & pop
    [10, -3, 3]
    final arr = [55, 43, 11]
    
->> END

final arr = [55,43,11]
return final arr reversed = [11, 43, 55]
*/