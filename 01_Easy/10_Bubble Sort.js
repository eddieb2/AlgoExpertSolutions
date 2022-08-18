// Solution 1: Optimal Time and Space Complexity
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function bubbleSort(array) {
	let swapped = true;

	while (swapped) {
		swapped = false;

		for (let i = 0; i < array.length - 1; i++) {
			let cur = array[i];
			let nxt = array[i + 1];

			if (cur > nxt) {
				array[i + 1] = array[i];
				array[i] = nxt;
				swapped = true;
			}
		}
	}
	return array;
}

/* Notes (FIXME write psuedo code for review)

*/
