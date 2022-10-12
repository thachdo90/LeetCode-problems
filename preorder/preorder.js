
var preorderRecursively = function(root) {
  let results = [];

  const traverse = (node) => {
      if (!node) {
          return;
      }
      results.push(node.val)
      if (node.children.length > 0) {
          for (let child of node.children) {
              traverse(child);
          }
      }
  }

  traverse(root)
  return results;
};

var preorderIteratively = function(root) {
  let results = [];
  let stack = [root];
  if (!root) {
      return [];
  }

  while (stack.length > 0) {
      let currentNode = stack.pop();
      results.push(currentNode.val);
      for (let i = currentNode.children.length - 1; i >= 0; i--) {
          stack.push(currentNode.children[i])
      }
  }
  return results;
}