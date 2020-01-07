class Stack {
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    return this.isEmpty() ? null : this.items.pop()
  }

  peek() {
    return this.isEmpty() ? null : this.items[this.size() - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }

  size() {
    return this.items.length
  }

  print() {
    return this.items.reverse().join('\n-----\n')
  }
}

let stack = new Stack()
console.log(stack.isEmpty())
stack.push('1')
stack.push('2')
stack.push('3')
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.peek())

console.log('---')

console.log(stack.pop())
console.log(stack.size())

console.log('---')

console.log(stack.clear())
console.log(stack.size())
