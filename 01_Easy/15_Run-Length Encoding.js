// Solution 1: Optimal Time and Space Complexity
// Time Complexity: O(n)
// Space Complexity: O(n)
function runLengthEncoding(string) {
  let arr = [];
  let count = 1;
  
  for (let i = 1; i < string.length+1; i++) {  // O(n)
    let prev = string[i-1]; 
    let cur = string[i]

    if (cur === prev && count < 9) {
      count++;
    } else  { // cases: (count === 9 || prev !== cur || i === string.length+1)
      arr.push(count)
      arr.push(prev)
      count = 1;
    }
  }
  
  return arr.join("") // O(n)
}


/*
search for at most 9 occurrences of a character
- white space is counted

loop: string.length
- if prev == cur && count < 9
      - count++
  else: 
      - push count, prev, and reset count

- return joined array
*/