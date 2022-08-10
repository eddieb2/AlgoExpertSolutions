// Best Solution (complete)
// Worst Case O(n) 
function isValidSubsequence(array, sequence) {
  let valid = false;
  
  while (sequence.length <= array.length) { // shorten both arrays
    
    if (sequence[0] !== array[0]) {
      array.shift(); 
    } else if (sequence[0] === array[0]){
      sequence.shift();
      array.shift();
    }

    if (sequence.length === 0) {
      valid = true;
      break;
    }
    
  }

  return valid;
}

/*
  Check 
  - if subsequence is longer than array -> return false

  INVALID conditions - immediately return false
  - if the length of remaining elements in "sequence" is greater than the 
    remaining elements in "array."

  
*/