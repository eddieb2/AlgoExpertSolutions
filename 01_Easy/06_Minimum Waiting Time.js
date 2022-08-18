// Solution 1: Optimal Time and Space Complexity
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
function minimumWaitingTime(queries) {
	// If there is 1 query, there is no wait time (first query is executed immediately)
	if (queries.length === 1) {
		return 0;
	}

	// Sort Queries
	queries.sort((a, b) => a - b); // O(nlogn)

	let minWaitingTime = queries[0];
	let prevSum = queries[0];

	for (let i = 2; i < queries.length; i++) {
		// O(n)
		prevSum += queries[i - 1];
		minWaitingTime += prevSum;
	}

	return minWaitingTime;
}

/*
- Sort Array O(nlogn) - Optimal positioning to reduce waiting time
[3, 2, 1, 2, 6]
[1, 2, 2, 3, 6]

- loop starting with index 2
    - keep sum of all previous sums
    - add prev suum to minimum waiting time 

- Return minWaitingTime
*/
