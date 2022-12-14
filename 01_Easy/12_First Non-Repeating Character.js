// Solution 1: Optimal Time and Space Complexity
// Time Complexity - O(n)
// Space Complexity - O(1) - We will never have more than 26 letters in the map
function firstNonRepeatingCharacter(string) {
	let map = {};
	let str = [...string];

	// Populate the hashmap with all letters, occurences, and first index that it was found at.
	// O(n)
	str.forEach((letter, index) => {
		// O(1)
		if (!(letter in map)) {
			map[letter] = { occurrence: 1, index };
		} else if (letter in map) {
			map[letter]['occurrence']++;
		}
	});

	console.log(map);

	let firstCharIdx;

	// Check the hashmap for the first occurrence that is non-repeating
	// O(n)
	for (const letter in map) {
		if (map[letter]['occurrence'] === 1) {
			firstCharIdx = map[letter]['index'];
			return firstCharIdx;
		}
	}

	return -1;
}

firstNonRepeatingCharacter('ggyllaylacrhdzedddjsc');

/* Notes (FIXME Write psuedo code for review)

*/
