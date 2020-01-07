class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.items = []
  }

  /**
   * 
   * @param {any} element 
   * @param {number} priority
   */
  enqueue(element, priority) {
    if (priority !== undefined && !Number.isFinite(priority)) throw new Error('priority is invalid number!')

    priority = priority || (this.isEmpty() ? 1 : (Math.max(...this.items.map(item => item.priority)) + 1))
    let priorityElement = new QueueElement(element, priority)

    let position = this.items.findIndex(item => item.priority > priorityElement.priority)
    position = position > -1 ? position : this.size()
    this.items.splice(position, 0, priorityElement)
  }

  /**
   * 返回出队列元素
   */
  dequeue() {
    return this.items.shift()
  }

  /**
   * 返回队列第一个元素
   */
  front() {
    return this.items[0]
  }

  isEmpty() {
    return this.size() === 0
  }

  /**
   * 返回队列长度
   */
  size() {
    return this.items.length
  }
}