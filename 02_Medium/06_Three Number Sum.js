// Solution 1: Brute Force
// Time Complexity: O(n^3)
// Space Complexity: O(n)

function threeNumberSum(array, targetSum) {
  array.sort((a,b) => a-b)
  
  let arr = []
  
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length-1; j++) {
      for (let k = j+1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === targetSum) {
          arr.push([array[i], array[j], array[k]])
        }
      }
    }
  }

  return arr;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;


