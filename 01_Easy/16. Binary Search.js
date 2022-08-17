// Solution 1: Iterative Solution, Optimal Time and Space Complexity
// Time Complexity = O(log n)
// Space Complexity = O(1)
function binarySearch(array, target) {
	let leftPtr = array[0];
	let rightPtr = array.length - 1;

	// Once left is greater than right we've reached the end
	while (leftPtr <= rightPtr) {
		let midPtr = Math.floor((leftPtr + rightPtr) / 2);
		let midPoint = array[midPtr];

		if (midPoint == target) {
			return midPtr; // return index of target
		} else if (midPoint < target) {
			// Search right
			leftPtr = midPtr + 1;
		} else if (midPoint > target) {
			// Search left
			rightPtr = midPtr - 1;
		}
	}

	return -1;
}
