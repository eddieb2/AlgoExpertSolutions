// Solution 1 (in place): Optimal Time and Space Complexity
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function selectionSort(array) {

  let sm = null;
  let smIdx = null;
  
  for (let i = 0; i < array.length-1; i++) {
    console.log(array)
    sm = array[i];
    smIdx = i;

    for (let j = i+1; j < array.length; j++) {
      
      if (array[j] < sm) {
        sm = array[j]
        smIdx = j;
      }
      
    }
    
    // swap (if clause prevents swapping if the last number of the array is greater than array[i])
    if (array[i] !== sm && i !== smIdx) {
      let temp = array[i];

      array[i] = sm;
      array[smIdx] = temp;
    }
    

  }
  
  return array;
}


/*


 0  1  2  3  4  5  6 

 S     S             
[8, 5, 2, 9, 5, 6, 3] <- input array
 i  j->j->j->j->j->j
 
sm    = 8 -> 5 -> 2
smIdx = 0 -> 1 -> 2
swap  = 8 & 2 (index 0 & 2)

    S              S 
[2, 5, 8, 9, 5, 6, 3]
    i  j->j->j->j->j
    
sm    = 5 -> 3
smIdx = 1 -> 6
swap  = 5 & 3 (index 1 & 6)

       S     S 
[2, 3, 8, 9, 5, 6, 5]
       i  j->j->j->j
       
sm    = 8 -> 5
smIdx = 2 -> 4
swap  = 8 & 5 (index 2 & 4)

          S        S
[2, 3, 5, 9, 8, 6, 5]
          i  j->j->j
          
sm    = 9 -> 8 -> 6 -> 5 
smIdx = 3 -> 4 -> 5 -> 6
swap  = 9 & 5 (index 3 & 6)

             S  S
[2, 3, 5, 5, 8, 6, 9]
             i  j->j
sm    = 8 -> 6
smIdx = 4 -> 5
swap  = 8 & 6 (index 4 & 5)

[2, 3, 5, 5, 6, 8, 9]
                i  j
sm    = 8
smIdx = 5
swap  = no swap

*/