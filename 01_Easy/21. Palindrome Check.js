// Solution 1: Optimal Time and Space Complexity
// Time Complexity: O(n/2)
// Space Complexity: O(1);

function isPalindrome(string) {
  let start = 0;
  let end = string.length - 1;

  while (start < end) { 
    
    if (string[start] !== string[end]) {
      return false;
    } else if (string[start] === string[end]) {
      start++;
      end--;  
    }
    
   } 
  
   return true;
}


/* Notes

// Solution 1:

Example 1: Odd length and result = true
'a  b  b  b  a'
 ^           ^      equal
    ^     ^         equal
       ^            equal
       ^
-> return true

Example 2: Odd length and result = false
'a  b  b  a  a'
 ^           ^      equal
    ^     ^         not equal
-> return false

Example 3: Even length and result = true
'a  b  b  a'
 ^        ^      equal
    ^  ^         equal
    ^  ^         equal ("start" and "end" cross over - additional iteration that could be stopped by checking if the string length is even)
-> return true

Example 4: Even length and result = false
'a  b  c  a'
 ^        ^      equal
    ^  ^         not equal
-> return false

*/