// Solution 1: Optimal Time and Space Complexity
// Time Complexity: O(n)
// Space Complexity: O(1)
function productSum(array, multi = 1) {
  let sum = 0;
  
  for (let i = 0; i < array.length; i++) {
    
    if (Array.isArray(array[i])) {
      sum += productSum(array[i], multi + 1)
    } else {
      sum += array[i];
    }
    
  }

  return sum * multi;
}

// Do not edit the line below.
exports.productSum = productSum;

/*
Need to improve recursion skills 
***review this later***
*/ 