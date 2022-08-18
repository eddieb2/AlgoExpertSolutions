// Solution 1: Optimal Time and Space Complexity
// Time Complexity: O(n)
// Space Complexity: O(n)
function generateDocument(characters, document) {
  if (document.length === 0) {
    return true;
  } 

  let charMap = {}; // chars we have
  let docMap = {}; // chars we need

  // Populate the hash maps with unique characters and occurrences 
  for (let i = 0; i < characters.length; i++) { 
      if (!(characters[i] in charMap)) {
        charMap[characters[i]] = 1;
      } else {
        charMap[characters[i]] += 1;
      }

      if (i < document.length) {
        if (!(document[i] in docMap)) {
            docMap[document[i]] = 1;
          } else {
            docMap[document[i]] += 1;
          }
      }
  }

  // Check if we have fewer characters than we need to construct the document
  for (const letter in docMap) {
    if (!(letter in charMap)) {
      return false;
    }
    
    let charsNeeded = docMap[letter];
    let charsHave = charMap[letter];
    
    if (charsNeeded > charsHave) {
      return false
    }
  }
  
  
  return true;
}


/* Notes
charMap = { } (characters we have)
docMap  = { } (characters we need)

- Populate the hash maps with unique characters and occurrences 
- Check if we have fewer characters than we need to construct the document
- Check if we have fewer characters than we need to construct the document

*/