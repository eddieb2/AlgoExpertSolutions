// Solution 1: Optimal Time and Space Complexity
// Time Complexity:  O(nlog(n))
// Space Complexity: O(1)
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  
  if (redShirtSpeeds.length === 0 && blueShirtSpeeds.length === 0) {
    return 0;
  }

  // SORT
  let red = redShirtSpeeds.sort((a,b) => a-b);
  let blue = blueShirtSpeeds.sort((a,b) => a-b);
  let minMax = 0;
  
  // CHECK - min or max speed
  if (fastest === true) {
    blue.reverse();
  }
  
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    
    if (red[i] > blue[i]) {
      minMax += red[i];
    } else {
      minMax += blue[i];
    }
    
  console.log(red[i], blue[i], "sum: " +minMax)
    
  }
  return minMax;
}

/*

------Min Speed------
*** smallest values with smallest values yield the slowest speeds ***

- sort both arrays
- simultaneously iterate through both arrays and 
add the largest value from each pair to minMax
- return minMax

ORIGINAL
R = [5,5,3,9,2]
B = [3,6,7,2,1]

SORT
R-> [2,3,5,5,9]
B-> [1,2,3,6,7]

PAIR - WHILE PAIRING ONLY PUSH THE LARGEST VALUE
[2,1] [3,2] [5,3] [5,6] [9,7] ----- VISUAL ONLY
MIN SPEED ARRAY = [2,3,5,5,9]

SUM MIN SPEED ARRAY = 25

------Max Speed------
*** largest values with smallest values yield the fastest speed ***

- sort both arrays
- reverse one array (this pairs up the largest values with the smallest)
- simultaneously iterate through both arrays and 
add the largest value from each pair to minMax
- return minMax

ORIGINAL
R = [5,5,3,9,2]
B = [3,6,7,2,1]

SORT 
R-> [2,3,5,5,9]
B-> [1,2,3,6,7] 

REVERSE B
R-> [2,3,5,5,9]
B-> [7,6,3,2,1]

PAIR - WHILE PAIRING ONLY PUSH THE LARGEST VALUE
[7,2] [3,6] [5,3] [5,2] [9,1] ----- VISUAL ONLY
MAX SPEED ARRAY = [7,6,5,5,9]

SUM MAX SPEED ARRAY = 32
*/
