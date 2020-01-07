# 队列

队列是遵循`FIFO（First In First Out，先进先出，也称为先来先服务）`原则的一组有序的项。  
队列在尾部添加新元素，并从顶部移除元素。  
使用`数组`保存队列的元素。

## 队列方法

1. enqueue 进列
2. dequeue 出列
3. front 查看队列头元素
4. isEmpty 判断队列是否为空
5. size 队列长度

## 队列实现

```js
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
```

## 测试

```js
let queue = new Queue()

console.log(queue.isEmpty())
queue.enqueue(11)
queue.enqueue(22)
queue.enqueue(33)
console.log(queue.isEmpty())
console.log(queue.size())
console.log(queue.front())

console.log('---')
console.log(queue.size())
console.log(queue.dequeue())

console.log('---')
console.log(queue.size())
```
