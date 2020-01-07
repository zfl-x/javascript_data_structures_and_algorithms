# 归并排序
归并排序是一种`分治算法`。  
将原始数组`切分成较小的数组`，直到每个小数组只有一个位置，接着将小数组`归并成较大的数组`，直到最后只有一个排序完毕的大数组。  
复杂度：O(nlog<sup>n</sup>)

## 归并排序实现
```js
function mergeSort(arr) {
  let length = arr.length

  if (length === 1) {
    return arr
  }

  let middle = Math.floor(length / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle, length)
  
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let i = 0, j = 0, result = []
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }

  while (i < left.length) {
    result.push(left[i++])
  }

  while (j < right.length) {
    result.push(right[j++])
  }

  return result
}
```

## 测试
```js
var count = 1000
var ms = []
for (let i = 0; i < count; i++) {
  let random = ~~(Math.random() * count)
  ms.push(random)
}

// console.log(ms.toString())
console.time('ms')
ms = mergeSort(ms)
console.timeEnd('ms')
console.log(ms.toString())
```