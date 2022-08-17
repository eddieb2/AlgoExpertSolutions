// Solution 1: Optimal Time and Space Complexity
// Time Complexity: O(n)
// Space Complexity: O(1)
function isValidSubsequence(array, sequence) {
	let valid = false;

	while (sequence.length <= array.length) {
		// shorten both arrays

		if (sequence[0] !== array[0]) {
			array.shift(); // O(n)
		} else if (sequence[0] === array[0]) {
			sequence.shift(); // O(n)
			array.shift(); // O(n)
		}

		if (sequence.length === 0) {
			valid = true;
			break;
		}
	}

	return valid;
}

/* Notes
  Check 
  - if subsequence is longer than array -> return false

  INVALID conditions - immediately return false
  - if the length of remaining elements in "sequence" is greater than the 
    remaining elements in "array."

  
*/
