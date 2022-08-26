// Solution 1: Optimal Time and Space Complexity
// Time Complexity: O(v+e)
// Space Complexity: O(1)
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name)
    
    for (const child of this.children) {
      child.depthFirstSearch(array)
    }
    
   return array;
  }
}

// Do not edit the line below.
exports.Node = Node;

/*
Need to improve recursion skills 
***review this later***
*/ 