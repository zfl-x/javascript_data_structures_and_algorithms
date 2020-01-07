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