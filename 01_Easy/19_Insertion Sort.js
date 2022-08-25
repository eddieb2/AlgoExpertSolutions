// Solution 1 (in place): Optimal Time and Space Complexity
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function insertionSort(array) {

  for (let i = 0; i < array.length; i++) {
  console.log(array)
    for (let j = i+1; j > 0; j--) {
        
        if (array[j] < array[j-1]) {
          let temp = array[j];
          
          array[j] = array[j-1];
          array[j-1] = temp;
        } else {
          break;
        }
        
      }
    
  }
  
  return array;
}


/*
INSERTION SORT
- break the list up into 2 separate parts: sorted and unsorted
- the sorted list starts off with 

 i
j-1 j
[8, 5, 2, 9, 5, 6, 3] -> first iteration -> 1 swap
[ ][                ]

    i
   j-1 j 
[5, 8, 2, 9, 5, 6, 3]  -> second iteration -> 2 swaps
[    ][             ]

    i
j-1 j
[5, 2, 8, 9, 5, 6, 3]
[    ][             ]

    i
 j    
[2, 5, 8, 9, 5, 6, 3] 
[    ][             ]
       i
      j-1 j
[2, 5, 8, 9, 5, 6, 3] -> third iteration -> BREAK ( j > j-1... j is already in the right pos.)
[sorted ][unsorted  ]

so on and so forth....
*/