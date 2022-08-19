// Solution 1: Optimal Time and Space Complexity
// Time Complexity: O(nlog(n))
// Space Complexity: O(1)
function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a,b) => a-b);
  blueShirtHeights.sort((a,b) => a-b);

  let backRow = redShirtHeights[0] > blueShirtHeights[0] ? redShirtHeights : blueShirtHeights;
  let frontRow = redShirtHeights[0] > blueShirtHeights[0] ? blueShirtHeights : redShirtHeights;

  for (let i = 0; i < backRow.length; i++) {
    if (backRow[i] < frontRow[i] || backRow[i] === frontRow[i]) {
      return false;
    } 
  }
  
  return true;
}

/* Notes
- even # of students
- at least 1 students per row
- half are wearing blue and half are wearing red 
- each row should contain the same # of students
    -- all reds in the same row
    -- all blues in the same row
    -- each student in the back row must be strictly taller than the student directly in front of them in the front row

- CASES:

TRUE CASE
- all elements in one row > all elements in another row
- [2,2,2]  OR [2,3,4,5,6,7,9 ]
- [1,1,1]     [1,1,1,1,1,6,8]

FALSE CASE
- all elements in both rows are equal  
- [1,1]
- [1,1]

FALSE CASE
- at least 1 pair of elements are equal, but not all 
- [1,2,2] OR [1,1,2,2,2,2] 
- [1,1,1]    [1,1,2,2,2,2]

PSUEDO CODE
    sort redshirts and blueshirts arrays
    backrow = array with largest 0th index number
    
    FOR LOOP (array length): simultaneously iterate through both arrays and compare the same indices 
        - if back[i] > front[i] || back[i] === front[i]:
            return false

    END LOOP
    
    return true
*/ 