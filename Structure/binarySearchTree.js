class TreeNode {
  constructor(element) {
    this.element = element
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  /**
   * 插入新节点
   * @param {number} element 
   */
  insert(element) {
    let node = new TreeNode(element),
      current = this.root

    if (current !== null) {
      while (current !== null) {
        if (element >= current.element) {
          if (current.right !== null) {
            current = current.right
          } else {
            current.right = node
            break
          }
        } else {
          if (current.left !== null) {
            current = current.left
          } else {
            current.left = node
            break
          }
        }
      }
    } else {
      this.root = node
    }
  }

  /**
   * 查找节点，存在返回true，否则返回false
   * @param {number} element 
   */
  search(element) {
    let current = this.root

    while (current !== null) {
      if (element < current.element) {
        current = current.left
      } else if (element > current.element) {
        current = current.right
      } else {
        return true
      }
    }

    return false
  }

  /**
   * 通过中序遍历方式遍历所有节点
   * @param {function} callback 
   */
  inOrderTraverse(callback) {
    function inOrderTraverseNode(current, callback) {
      if (current !== null) {
        inOrderTraverseNode(current.left, callback)
        callback(current.element)
        inOrderTraverseNode(current.right, callback)
      }
    }

    inOrderTraverseNode(this.root, callback)
  }

  /**
   * 通过先序遍历方式遍历所有节点
   * @param {function} callback 
   */
  preOrderTraverse(callback) {
    function preOrderTraverseNode(current, callback) {
      if (current !== null) {
        callback(current.element)
        preOrderTraverseNode(current.left, callback)
        preOrderTraverseNode(current.right, callback)
      }
    }

    preOrderTraverseNode(this.root, callback)
  }

  /**
   * 通过后序遍历方式遍历所有节点
   * @param {function} callback 
   */
  postOrderTraverse(callback) {
    function postOrderTraverseNode(current, callback) {
      if (current !== null) {
        postOrderTraverseNode(current.left, callback)
        postOrderTraverseNode(current.right, callback)
        callback(current.element)
      }
    }

    postOrderTraverseNode(this.root, callback)
  }

  /**
   * 最小值节点
   */
  min() {
    let current = this.root

    while (current && current.left !== null) {
      current = current.left
    }

    return current.element
  }

  /**
   * 最大值节点
   */
  max() {
    let current = this.root

    while (current && current.right !== null) {
      current = current.right
    }

    return current.element
  }

  /**
   * 移除节点
   * @param {number} element 
   */
  remove(element) {
    function findMinNode(current) {
      while (current && current.left !== null) {
        current = current.left
      }

      return current
    }
    
    function removeNode(current, element) {
      if (current === null) {
        return null
      } else {
        if (element > current.element) {
          current.right = removeNode(current.right, element)
          return current
        } else if (element < current.element) {
          current.left = removeNode(current.left, element)
          return current
        } else {
          if (current.left === null && current.right === null) {
            return null
          }

          if (current.left === null) {
            return current.right
          } else if (current.right === null) {
            return current.left
          } else {
            let minNode = findMinNode(current.right)
            current.element = minNode.element
            current.right = removeNode(current.right, minNode.element)
            return current
          }
        }
      }
    }

    return removeNode(this.root, element)
  }
}

let binarySearchTree = new BinarySearchTree()
binarySearchTree.insert(11)
binarySearchTree.insert(7)
binarySearchTree.insert(15)
binarySearchTree.insert(5)
binarySearchTree.insert(3)
binarySearchTree.insert(9)
binarySearchTree.insert(8)
binarySearchTree.insert(10)
binarySearchTree.insert(13)
binarySearchTree.insert(12)
binarySearchTree.insert(14)
binarySearchTree.insert(20)
binarySearchTree.insert(18)
binarySearchTree.insert(25)
binarySearchTree.insert(6)
// binarySearchTree.inOrderTraverse((element) => {
//   console.log(element)
// })
// binarySearchTree.preOrderTraverse((element) => {
//   console.log(element)
// })
// binarySearchTree.postOrderTraverse((element) => {
//   console.log(element)
// })
console.log(binarySearchTree.min())
console.log(binarySearchTree.max())
console.log(binarySearchTree.search(1))
console.log(binarySearchTree.remove(5))
console.log(binarySearchTree)