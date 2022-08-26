// Solution 1: Optimal Time and Space Complexity
// Time Complexity: O(n)
// Space Complexity: O(1)
function moveElementToEnd(array, toMove) {
  
  let swapPos = null;
  let lookForSwap = false;

  // iterate through the array in reverse
  for (let i = array.length-1; i >= 0; i--) {
    
   // Set swap position
    if (array[i] !== toMove && lookForSwap === false) {
      swapPos = i;
      lookForSwap = true;
    }

    // Swap
    if (array[i] === toMove && lookForSwap === true) {
      let temp = array[i];

      array[i] = array[swapPos];
      array[swapPos] = temp;

      swapPos--;
    }
    
  }

  return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;

/*

[2, 1, 2, 2, 2, 3, 4, 2]        toMove = 2 
                   
// loop in reverse
  // look for first non-2
    // once first non-2 is found, set swap pos & looForSwap to true
    // if a 2 is found swap it with the last known non-2 & move the swap position down one

[2, 1, 2, 2, 2, 3, 4, 2] -> didn't find a non-2
                      i
                      
[2, 1, 2, 2, 2, 3, 4, 2] -> found a non-2, set pos, now look for a swap
                   i
                   s

[2, 1, 2, 2, 2, 3, 4, 2] -> looking for a 2: didn't find a 2
                i  s

[2, 1, 2, 2, 2, 3, 4, 2] -> looking for a 2: found a 2
             i     s

[2, 1, 2, 2, 4, 3, 2, 2] -> swap, swapPos--
             i     s

[2, 1, 2, 2, 4, 3, 2, 2] -> looking for a 2: found a 2
          i     s

[2, 1, 2, 2, 4, 3, 2, 2] -> swap, swapPos--
          i     s   

[2, 1, 2, 3, 4, 2, 2, 2] -> looking for a 2: found a 2
       i     s

[2, 1, 2, 3, 4, 2, 2, 2] -> swap, swapPos--
       i     s

[2, 1, 4, 3, 2, 2, 2, 2] -> looking for a 2: didn't find a 2
    i     s

[2, 1, 4, 3, 2, 2, 2, 2] -> looking for a 2: found a 2
 i        s

[2, 1, 4, 3, 2, 2, 2, 2] -> swap, pos--
 i        s
 
[3, 1, 4, 2, 2, 2, 2, 2] -> REACHED THE END OF THE LIST 

 
*/