# 树
`树`是一种`非顺序数据结构`，它对于存储需要快速查找的数据非常有用。  
一个树结构包含一系列存在`父子关系`的节点。每个节点都有一个父节点（除了顶部的第一个节点）以及零个或多个子节点。  
位于树顶部的节点叫作`根节点`。  
树中的每个元素都叫作`节点`，节点分为`内部节点`和`外部节点`。  
节点的一个属性是`深度`，节点的深度取决于`它的祖先节点的数量`。`树的高度`取决于`所有节点深度的最大值`。

# 二叉树
`二叉树`中的节点最多`只能有两个子节点`,一个是`左侧子节点`，另一个是`右侧子节点`。

# 二叉搜索树
`二叉搜索树（BST）`是二叉树的一种，左侧节点存储（比父节点）小的值，在右侧节点存储（比父节点）大（或者等于）的值。

## 二叉搜索树方法
1. insert   插入新节点
2. search    查找节点，存在返回true，否则返回false
3. inOrderTraverse   通过中序遍历方式遍历所有节点，以从最小到最大的顺序访问所有节点，对树进行排序操作
4. preOrderTraverse  通过先序遍历方式遍历所有节点，以优先于后代节点的顺序访问每个节点的，打印一个结构化的文档
5. postOrderTraverse  通过后序遍历方式遍历所有节点，先访问节点的后代节点再访问节点本身，计算一个目录和它的子目录中所有文件所占空间的大小
6. min   最小值节点
7. max   最大值节点
8. remove   移除节点

## 二叉搜索树实现
```js
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
```

## 测试
```js
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
console.log('-----')
binarySearchTree.inOrderTraverse((element) => {
  console.log(element)
})
console.log('-----')
binarySearchTree.preOrderTraverse((element) => {
  console.log(element)
})
console.log('-----')
binarySearchTree.postOrderTraverse((element) => {
  console.log(element)
})
console.log('-----')
console.log(binarySearchTree.min())
console.log(binarySearchTree.max())
console.log(binarySearchTree.search(1))
console.log(binarySearchTree.remove(5))
console.log(binarySearchTree)
```