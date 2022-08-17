// Time Complexity: O(n^2)
// Space Complexity: O(n)

function twoNumberSum(array, targetSum) {
  
	let targets = [];
	
	for (let i = 0; i < array.length; i++){
		
		for (let j = i+1; j < array.length; j++) {
			
			if (array[i] + array[j] == targetSum){
				
				targets.push(array[i], array[j]);
				
			}
			
		}
	}
	
	return targets;
}


