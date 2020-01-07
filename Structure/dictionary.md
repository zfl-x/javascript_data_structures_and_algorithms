# 字典
存储的是`[键，值]对`，其中`键名`是用来查询特定元素的。  
字典也称作`映射`。  
使用`对象`存储字典里的键值对。  

## 字典方法
1. set   添加新元素
2. remove    移除元素
3. has   判断是否存在字典中
4. get  查找特定键并返回值
5. clear  清空字典
6. size   字典长度
7. keys   将字典的所有键名，并已数组返回
8. values   将字典的所有值，并已数组返回

## 字典实现
```js
class Dictionary {
  constructor() {
    this.items = {}
  }
  
  /**
   * 添加元素
   * @param {string} key 
   * @param {any} value 
   */
  set(key, value) {
    this.items[key] = value
  }

  /**
   * 移除元素
   * @param {string} key 
   */
  remove(key) {
    if (this.has(key)) {
      delete this.items[key]
      return true
    }

    return false
  }

  /**
   * 判断是否存在字典中
   * 存在返回true，否则返回false
   * @param {string} key 
   */
  has(key) {
    return this.items.hasOwnProperty(key)
  }

  /**
   * 查找特定值
   * @param {string} key 
   */
  get(key) {
    return this.has(key) ? this.items[key] : null
  }

  /**
   * 清空字典
   */
  clear() {
    this.items = {}
  }

  /**
   * 返回字典长度
   */
  size() {
    return this.values().length
  }

  /**
   * 将字典的所有键名，并已数组返回
   */
  keys() {
    return Object.keys(this.items)
  }

  /**
   * 将字典的所有值，并已数组返回
   */
  values() {
    return Object.values(this.items)
  }
}
```

## 测试
```js
let dictionary = new Dictionary()
dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'johnsnow@email.com')
dictionary.set('Tyrion', 'tyrion@email.com')
console.log(dictionary.size())
console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.get('Tyrion'))
dictionary.remove('John')
console.log(dictionary.keys())
console.log(dictionary.values())
```