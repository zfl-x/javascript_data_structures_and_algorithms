/**
 * 双向链表子节点
 */
class DoublyLinkedNode {
  constructor(element, prev = null, next = null) {
    this.element = element
    this.next = next
    this.prev = prev
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

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

  remove(element) {
    let = position = this.indexOf(element)
    return position !== -1 && this.removeAt(position)
  }

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

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

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

let doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.append(111)
doublyLinkedList.append(222)
doublyLinkedList.append(333)
// doublyLinkedList.append(444)
console.log(doublyLinkedList.size())
// console.log(doublyLinkedList.insert(0, 444))
// console.log(doublyLinkedList.indexOf(111))
console.log(doublyLinkedList.removeAt(2))
console.log(doublyLinkedList.toString())