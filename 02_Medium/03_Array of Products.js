// Solution 1: Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(n)
function arrayOfProducts(array) {

  let productArr = [];
  
  for (let i = 0; i < array.length; i++) {
    let product = 1;
    
    for (let j = 0; j < array.length; j++) {
      if (j === i) {
        continue;
      } else {
        product*=array[j]
      }

      
    }
    
    productArr.push(product)
  }

  return productArr;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
