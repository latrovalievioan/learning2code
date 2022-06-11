type TreeNode = {
  key: number | null;
  left: TreeNode | null;
  right: TreeNode | null;
  parent: TreeNode | null;
}

const BST: TreeNode = {
  parent: null,
  key: null,
  left: null,
  right: null,
}

const insertNode = (key: number, currentNode: TreeNode) : void => {
  if(!currentNode.key) { 
    currentNode.key = key
    return
  } 
  if(key < currentNode.key){
    if(!currentNode.left) {
      currentNode.left = {
        parent: currentNode,
        key,
        left: null,
        right: null,
      }
      return
    } else insertNode(key, currentNode.left)
  } 
  if(key > currentNode.key){
    if(!currentNode.right) {
      currentNode.right = {
        parent: currentNode,
        key,
        left: null,
        right: null,
      }
      return
    } else insertNode(key, currentNode.right)
  }
}

const findNode = (key: number, tree: TreeNode): TreeNode | 'Not Found' => {
  if(tree.key === key) return tree
  
  if(key < (tree.key as number) && tree.left) return findNode(key, tree.left)
  if(key > (tree.key as number) && tree.right) return findNode(key, tree.right)

  return 'Not Found'
}

const findMin = (currentNode: TreeNode): TreeNode => {
  if(currentNode.left) return findMin(currentNode.left)
  return currentNode
}

const findMax = (currentNode: TreeNode): TreeNode => {
  if(currentNode.right) return findMax(currentNode.right)
  return currentNode
}

const delNode = (key: number, tree: TreeNode): 'Not Found' | void => {
  const node: TreeNode | 'Not Found' = findNode(key, tree);
  if(node === 'Not Found') return node 

  // node is leaf
  if(!node.left && !node.right && node.parent) {
    node?.parent?.right?.key === key
      ? node.parent.right = null
      : node.parent.left = null
  }

  // node has only left child
  if(node.left && !node.right && node.parent){
    node?.parent?.right?.key === key
      ? node.parent.right = { ...node.left, parent: node.parent }
      : node.parent.left = { ...node.left, parent: node.parent }
  }
  // node has only right child
  if(!node.left && node.right && node.parent){
    node?.parent?.right?.key === key
      ? node.parent.right = { ...node.right, parent: node.parent }
      : node.parent.left = { ...node.right, parent: node.parent }
  }

  // node has both children
  if(node.left && node.right){
    const successor = findMin(node.right);
    delNode(successor.key as number, tree)
    node.key = successor.key
  }
}

// Visualisation
const dotOut = (BST: TreeNode) => {
  const arrows: string[] = []
  const traverse = (currentNode: TreeNode) => {
    if(currentNode.parent) arrows.push(`"${currentNode.key}" -> ${currentNode.parent.key}[color = gray]`)
    if(currentNode?.left) {
      arrows.push(`"${currentNode.key}" -> "${currentNode.left.key}"`)
      traverse(currentNode.left)
    }
    if(currentNode?.right) {
      arrows.push(`"${currentNode.key}" -> "${currentNode.right.key}"`)
      traverse(currentNode.right)
    }
  }
  traverse(BST)
  const content = `digraph "Tree" {
    ${arrows.join('\n    ')}
}`

  const fs = require('fs')
  fs.writeFile('./dot.txt', content, (e: Error) => console.error(e));
} 


insertNode(15, BST)
insertNode(5, BST)
insertNode(3, BST)
insertNode(12, BST)
insertNode(10, BST)
insertNode(6, BST)
insertNode(7, BST)
insertNode(13, BST)
insertNode(16, BST)
insertNode(20, BST)
insertNode(18, BST)
insertNode(23, BST)
delNode(20, BST)

dotOut(BST)

