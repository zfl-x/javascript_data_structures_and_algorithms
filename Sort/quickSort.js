function quickSort(arr) {
  if (arr.length <= 1) return arr

  let length = arr.length,
    left = [],
    right = [],
    pIndex = Math.floor(length / 2),
    pivot = arr.splice(pIndex, 1)[0]
  
  length -= 1

  for (let i = 0; i < length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

module.exports = quickSort

// var count = 1000
// var qs = []
// for (let i = 0; i < count; i++) {
//   let random = ~~(Math.random() * count)
//   qs.push(random)
// }

// // console.log(qs.toString())
// console.time('qs')
// qs = quickSort(qs)
// console.timeEnd('qs')
// console.log(qs.toString())