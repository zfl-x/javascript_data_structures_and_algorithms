class MySet {
  constructor() {
    this.items = {}
  }

  /**
   * 添加元素
   * @param {any} value 
   */
  add(value) {
    if (!this.has(value)) {
      this.items[value] = value
      return true
    }

    return false
  }

  /**
   * 移除元素
   * @param {any} value 
   */
  remove(value) {
    if (!this.has(value)) {
      delete this.items[value]
      return true
    }

    return false
  }

  /**
   * 判断是否存在集合中
   * 存在返回true，否则返回false
   * @param {any} value 
   */
  has(value) {
    return this.items.hasOwnProperty(value)
  }

  /**
   * 清空集合
   */
  clear() {
    this.items = {}
  }

  /**
   * 返回集合长度
   */
  size() {
    return this.values().length
  }

  /**
   * 返回包含所有元素的数组
   */
  values() {
    return Object.values(this.items)
  }

  /**
   * 并集
   * @param {MySet} otherSet 
   */
  union(otherSet) {
    let unionSet = new MySet()
    
    otherSet.values().concat(this.values()).forEach(item => {
      unionSet.add(item)
    })

    return unionSet
  }

  /**
   * 交集
   * @param {MySet} otherSet 
   */
  intersection(otherSet) {
    let intersectionSet = new MySet()

    this.values().forEach(item => {
      otherSet.has(item) && intersectionSet.add(item)
    })

    return intersectionSet
  }

  /**
   * 差集
   * @param {MySet} otherSet 
   */
  difference(otherSet) {
    let differenceSet = new MySet()
    
    this.values().forEach(item => {
      (!otherSet.has(item)) && differenceSet.add(item)
    })

    return differenceSet
  }

  /**
   * 子集
   * @param {MySet} otherSet 
   */
  subset(otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }
    
    for (const item of this.values()) {
      if (!otherSet.has(item)) return false
    }

    return true
  }
}

// let set = new MySet()
// set.add(1);
// console.log(set.values());
// console.log(set.has(1));
// console.log(set.size());
// set.add(2);
// console.log(set.values());
// console.log(set.has(2));
// console.log(set.size());
// set.remove(1);
// console.log(set.values());
// set.remove(2);
// console.log(set.values());

let set1 = new MySet()
let set2 = new MySet()
let set3 = new MySet()
set1.add(1)
set1.add(2)
set1.add(3)
set2.add(1)
set2.add(22)
set2.add(3)
set3.add(1)
set3.add(2)
set3.add(3)
set3.add(4)
console.log(set1.union(set2).values())
console.log(set1.intersection(set2).values())
console.log(set1.difference(set2).values())
console.log(set2.subset(set3))
