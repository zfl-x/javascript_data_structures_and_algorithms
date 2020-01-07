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