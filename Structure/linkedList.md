# 链表

链表中的元素在内存中并`不是连续放置`的。  
每个元素由一个存储`元素本身的节点`和一个`指向下一个元素的引用`（也称指针或链接）组成。   
访问链表中间的一个元素，需要从`起点（表头）`开始迭代列表直到找到所需的元素。  

## 链表方法

1. append 链表尾部追加元素
2. insert 向特定位置插入元素
3. remove 移除元素
4. removeAt 根据索引移除元素
4. indexOf 查找元素
4. isEmpty 判断链表是否为空
5. size 栈长度
5. toString 打印链表

## 链表实现

```js
/**
 * 链表子节点
 * next指向下一个元素
 */
class LinkedNode {
  constructor(element, next = null) {
    this.element = element
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  /**
   * 链表追加元素
   * @param {any} element 
   */
  append(element) {
    let node = new LinkedNode(element), previous = null,
      current = null
    
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
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
        let node = new LinkedNode(element, current)
        previous ? previous.next = node : this.head = node
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
    // let previous = null, current = this.head

    // while (current) {
    //   if (Object.is(current.element, element)) {
    //     previous ? previous.next = current.next : this.head = current.next
    //     this.length--
    //     return current.element
    //   }
    //   previous = current
    //   current = current.next
    // }

    // return null
    let position = this.indexOf(element)
    return position !== -1 && this.removeAt(position)
  }

  /**
   * 根据索引删除元素
   * @param {number} position 
   */
  removeAt(position) {
    let previous = null, current = this.head

    while (current) {
      if (position === 0) {
        previous ? previous.next = current.next : this.head = current.next
        this.length--
        return current.element
      }

      previous = current
      current = current.next
      position--
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
let linkedList = new LinkedList()
linkedList.append(111)
linkedList.append(222)
linkedList.append(333)

console.log(linkedList.size())
console.log(linkedList.isEmpty())
console.log(linkedList.remove(444))
console.log(linkedList.removeAt(0))
console.log(linkedList.indexOf(111))
console.log(linkedList.insert(3, 444))
console.log(linkedList.toString())
```
