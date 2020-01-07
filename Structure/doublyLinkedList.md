# 双向链表

双向链表中的元素在内存中并`不是连续放置`的。  
双向链表是双向的，每个元素由一个存储`元素本身的节点`、`一个链向下一个元素`、`另一个链向前一个元素`组成。   
访问链表中间的一个元素，需要从`起点（表头）`或者`尾部（表尾）`开始迭代列表直到找到所需的元素。  

## 双向链表方法

1. append 链表尾部追加元素
2. insert 向特定位置插入元素
3. remove 移除元素
4. removeAt 根据索引移除元素
4. indexOf 查找元素
4. isEmpty 判断链表是否为空
5. size 栈长度
5. toString 打印链表

## 双向链表实现

```js
/**
 * 双向链表子节点
 * prev指向上一个元素
 * next指向下一个元素
 */
class LinkedNode {
  constructor(element, prev = null, next = null) {
    this.element = element
    this.next = next
    this.prev = prev
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  /**
   * 链表追加元素
   * @param {any} element 
   */
  append(element) {
    let node = new DoublyLinkedNode(element)
    
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    
    this.length++
  }

  /**
   * 向特定位置插入元素
   * @param {number} position 
   * @param {any} element 
   */
  insert(position, element) {
    let previous = null, current = this.head
    
    if (position < 0) {
      throw new Error('输入正整数')
    }

    if (this.length === 0 || position >= this.length) {
      this.append(element)
      return true
    }
    
    while (current) {
      if (position === 0) {
        let node = new DoublyLinkedNode(element, previous, current)
        if (previous) {
          previous.next = node
          current.prev = node
        } else {
          this.head.prev = node
          this.head = node
        }
        this.length++
        return true
      }

      previous = current
      current = current.next
      position--
    }

    return false
  }

  /**
   * 删除元素
   * @param {any} element 
   */
  remove(element) {
    let = position = this.indexOf(element)
    return position !== -1 && this.removeAt(position)
  }

  /**
   * 根据索引删除元素
   * @param {number} position 
   */
  removeAt(position) {
    let previous = null,
      current = this.head,
      fromHead = true

    if (position > this.length / 2) {
      position = (this.length - 1) - position
      current = this.tail
      fromHead = false
    }

    if (position >= 0) {
      while (current) {
        if (position === 0) {
          if (previous) {
            if (fromHead) {
              current.next.prev = previous
              previous.next = current.next
            } else {
              current.prev.next = previous
              previous.prev = current.prev
            }
          } else {
            if (fromHead) {
              current.next.prev = null
              this.head = current.next
            } else {
              current.prev.next = null
              this.tail = current.prev
            }
          }

          this.length--
          return current.element
        }
  
        previous = current
        current = fromHead ? current.next : current.prev
        position--
      }
    }

    return null
  }

  /**
   * 查找元素
   * @param {any} element 
   */
  indexOf(element) {
    let current = this.head,
      position = 0

    while (current) {
      if (Object.is(current.element, element)) {
        return position
      }

      current = current.next
      position++
    }

    return -1
  }

  /**
   * 判断链表是否为空
   */
  isEmpty() {
    return this.length === 0
  }

  /**
   * 返回栈长度
   */
  size() {
    return this.length
  }

  /**
   * 打印链表
   */
  toString() {
    let current = this.head,
      str = []

    while (current) {
      str.push(current.element)
      current = current.next
    }

    return str.toString()
  }
}
```

## 测试

```js
let doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.append(111)
doublyLinkedList.append(222)
doublyLinkedList.append(333)
doublyLinkedList.append(444)
console.log(doublyLinkedList.size())
console.log(doublyLinkedList.insert(0, 444))
console.log(doublyLinkedList.indexOf(111))
console.log(doublyLinkedList.removeAt(2))
console.log(doublyLinkedList.toString())
```
