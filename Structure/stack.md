# 栈
栈是一种遵从`后进先出（LIFO）`原则的有序集合。  
新添加的或待删除的元素都保存在栈的末尾，称作栈顶，另一端就叫栈底。  
使用`数组`保存栈里的元素。  

## 栈方法
1. push   入栈
2. pop    出栈
3. peek   查看栈顶元素
4. isEmpty  判断栈是否为空
5. clear  清空栈
6. size   栈长度

## 栈实现
```js
class Stack {
  constructor() {
    this.items = []
  }

  /**
   *  返回入栈后长度 
   **/
  push(element) {
    return this.items.push(element)
  }

  /**
   * 返回出栈元素
   **/
  pop() {
    return this.items.pop()
  }

  /**
   * 返回栈顶元素
   **/
  peek() {
    return this.items[this.size() - 1]
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this.items = []
  }

  /**
   * 返回栈长度
   **/
  size() {
    return this.items.length
  }
}
```

## 测试
```js
let stack = new Stack()
console.log('isEmpty: ', stack.isEmpty())
stack.push('1')
stack.push('2')
stack.push('3')
console.log('isEmpty: ', stack.isEmpty())
console.log('size: ', stack.size())
console.log('peek: ', stack.peek())

console.log('---')

console.log(stack.pop())
console.log(stack.size())

console.log('---')

console.log(stack.clear())
console.log(stack.size())
```