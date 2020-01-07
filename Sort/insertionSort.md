# 插入排序
每次排一个数组项，以此方式构建最后的排序数组。  
复杂度：O(n<sup>2</sup>)

## 插入排序实现
```js
function insertionSort(arr) {
  let length = arr.length
  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      }
    }
  }
}
```

## 测试
```js
var count = 1000
var is = []
for (let i = 0; i < count; i++) {
  let random = ~~(Math.random() * count)
  is.push(random)
}

console.log(is.toString())
console.time('is')
insertionSort(is)
console.timeEnd('is')
console.log(is.toString())
```