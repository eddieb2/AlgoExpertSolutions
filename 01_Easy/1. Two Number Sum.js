// Solution 1: Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(n)

function twoNumberSum(array, targetSum) {
	let targets = [];

	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] == targetSum) {
				targets.push(array[i], array[j]);
			}
		}
	}

	return targets;
}

// Solution 2: Optimal Solution
// Time Complexity: O(n)
// Space Complexity: O(n)
function twoNumberSum(array, targetSum) {
	let hash = {};

	for (let i = 0; i < array.length; i++) {
		// O(n)
		let complement = targetSum - array[i];

		if (!(array[i] in hash)) {
			// O(1)
			hash[array[i]] = i;
		}

		if (complement in hash) {
			// O(1)
			if (hash[complement] !== i) {
				return [complement, array[i]];
			}
		}
	}

	return [];
}

/* Notes
- Add all numbers to the hash with corresponding indicies:
				-> array = [4, 6, 1]
				-> hash  = { 
							4: 0, 
							6: 1,
                      		1: 2 
                    		}
                    
- Check if the complement is in the hash:
	-> i = 0 , array[0] = 4, comp = 1
		->  "1" in hash -> true
          	-> i !== hash[complement (1)] -> 0 != 2 -> true
          		-> return [1,4]
        
*/
