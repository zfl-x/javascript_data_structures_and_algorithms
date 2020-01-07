# 散列表
存储的是`[键，值]对`，其中`键名`是用来查询特定元素的。  
`散列算法`的作用是尽可能快地在数据结构中找到一个值。  
`散列函数`的作用是给定一个键值，然后返回值在表中的地址。  
使用`数组`存储散列表里的键值对。  
不同的值在散列表中对应相同位置的时候，我们称其为`冲突`。  
处理冲突有几种方法：`分离链接`、`线性探查`。  
`分离链接法`包括为散列表的每一个位置创建一个链表并将元素存储在里面，使用`链表`。  
`线性探查`是当想向表中某个位置加入一个新元素的时候，如果索引为index的位置已经被占据了，就尝试index+1的位置。如果index+1的位置也被占据了，就尝试index+2的位置，以此类推。  

## 散列表方法
1. put   添加新元素
2. remove    移除元素
3. get  查找特定键并返回值

4. has   判断是否存在散列表中
5. clear  清空散列表
6. size   散列表长度
9. loseloseHashCode 散列函数，根据Key生成散列表位置

## 散列表实现
```js
class HashTable {
  constructor() {
    this.table = []
  }

  /**
   * 添加新元素
   * @param {string} key 
   * @param {any} value 
   */
  put(key, value) {
    this.table[this.loseloseHashCode(key)] = value
  }

  /**
   * 移除元素
   * @param {string} key 
   */
  remove(key) {
    this.table[this.loseloseHashCode(key)] = undefined
  }

  /**
   * 查找特定键并返回值
   * @param {string} key 
   */
  get(key) {
    return this.table[this.loseloseHashCode(key)]
  }

  /**
   * 判断是否存在散列表中
   * @param {string} key 
   */
  has(key) {
    return this.table[this.loseloseHashCode(key)] !== undefined
  }

  /**
   * 清空散列表
   */
  clear() {
    return this.table = []
  }

  /**
   * 散列表长度
   */
  size() {
    let count = 0

    this.table.forEach(item => {
      item !== undefined && count++
    })

    return count
  }
  
  /**
   * 散列函数，根据Key生成散列表位置
   * @param {string} key 
   */
  loseloseHashCode(key) {
    let sum = 0
    
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i)
    }
    
    return sum % 37
  }
}
```

## 测试
```js
let hash = new HashTable()
hash.put('Gandalf', 'gandalf@email.com')
hash.put('John', 'johnsnow@email.com')
hash.put('Tyrion', 'tyrion@email.com')

console.log(hash.get('Gandalf'))
console.log(hash.get('Loiane'))

console.log(hash.size())
hash.remove('Gandalf')
console.log(hash.get('Gandalf'))

console.log(hash.size())
```