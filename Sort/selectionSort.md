# 选择排序
找到数据结构中的最小值并将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推。  
复杂度：O(n<sup>2</sup>)

## 选择排序实现
```js
function selectionSort(arr) {
  let length = arr.length
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
}
```

## 测试
```js
var count = 1000
var ss = []
for (let i = 0; i < count; i++) {
  let random = ~~(Math.random() * count)
  ss.push(random)
}

console.log(ss.toString())
console.time('ss')
selectionSort(ss)
console.timeEnd('ss')
console.log(ss.toString())
```