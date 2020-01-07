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