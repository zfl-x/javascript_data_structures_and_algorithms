# 快速排序
快速排序是一种`分治算法`。  
将原始数组分为较小的数组。  
复杂度：O(nlog<sup>n</sup>)

## 快速排序实现
```js
function quickSort(arr) {
  if (arr.length <= 1) return arr

  let length = arr.length,
    left = [],
    right = [],
    pIndex = Math.floor(length / 2)
    pivot = arr[pIndex]

  for (let i = 0; i < length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else if (arr[i] > pivot) {
      right.push(arr[i])
    }
  }
  

  return [...quickSort(left), pivot, ...quickSort(right)]
}
```

## 测试
```js
var count = 1000
var qs = []
for (let i = 0; i < count; i++) {
  let random = ~~(Math.random() * count)
  qs.push(random)
}

// console.log(qs.toString())
console.time('qs')
qs = quickSort(qs)
console.timeEnd('qs')
console.log(qs.toString())
```