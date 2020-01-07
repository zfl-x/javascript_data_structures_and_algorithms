class Queue {
  constructor() {
    this.items = []
  }

  /**
   * 返回队列长度
   * @param {any} element 
   */
  enqueue(element) {
    return this.items.push(element)
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
    return this.items.length === 0
  }

  /**
   * 返回队列长度
   */
  size() {
    return this.items.length
  }
}

module.exports = Queue

// let queue = new Queue()

// console.log(queue.isEmpty())
// queue.enqueue(11)
// queue.enqueue(22)
// queue.enqueue(33)
// console.log(queue.isEmpty())
// console.log(queue.size())
// console.log(queue.front())

// console.log('---')
// console.log(queue.size())
// console.log(queue.dequeue())

// console.log('---')
// console.log(queue.size())