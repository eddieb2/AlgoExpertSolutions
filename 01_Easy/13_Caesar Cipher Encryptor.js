// Solution 1: Optimal Time and Space Complexity
// Time Complexity: O(n)
// Space Complexity: O(n)
function caesarCipherEncryptor(string, key) {
  let map = {}
  let encrypted = [];
  
  if (key === 0) {
    return string;
  }
  
  // Populate hashmap with all letters in the alphabet and their corresponding position
  for (let i = 0; i <= 25; i++) { // O(n) 
    map[String.fromCharCode(i+97)] = i;
  }

  // Add the shifted (encrypted) positions to the encrypted array
  for (let i = 0; i < string.length; i++) { // O(n)
    encrypted.push((map[string[i]] + key) % 26);
  }

  // Populate the encrypted array with the characters from the shifted (encrypted) positions
  encrypted = encrypted.map(position => {  // O(n)
     return String.fromCharCode(position + 97);
  })

  
  return encrypted.join('');
}


/* Notes
- Populate a hash with all characters in the alphabet and their positions (0-25).
    - We receive the characters by iterating through the UTF-16 codes from 97-122 (i+97 gives us the proper UTF-16 code from a-z).
    - Give the characters (key) the value of i in the hash.
    - To wrap the alphabet (position + key) % 26.
- Iterate through "string."
    - Locate the alphabetical position, within "map", of the current "string" character.
    - Shift the alphabetical position by the value of key and use the modulus operator to wrap the alphabet. (char = z, pos = 25, key = 1, new pos = 0)
    - Push the newly shifted position into encrypted
- Iterate through "encrypted."
    - Return the characters from the newly shifted positions.
- Join "encrypted" to form the new string.

*/