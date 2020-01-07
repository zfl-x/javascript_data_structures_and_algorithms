# 冒泡排序
比较任何两个`相邻的项`，如果第一个比第二个大，则交换它们。  
复杂度：O(n<sup>2</sup>)

## 冒泡排序实现
```js
function bubbleSort(arr) {
  let length = arr.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
}
```

## 测试
```js
var count = 1000
var bs = []
for (let i = 0; i < count; i++) {
  let random = ~~(Math.random() * count)
  bs.push(random)
}

console.log(bs.toString())
console.time('bs')
bubbleSort(bs)
console.timeEnd('bs')
console.log(bs.toString())
```