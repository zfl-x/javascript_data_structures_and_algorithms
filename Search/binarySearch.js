const quickSort = require('../Sort/quickSort')

class BinarySearch {
  constructor(arr) {
    this.arr = quickSort(arr)
  }

  search(item) {
    let low = 0,
      high = this.arr.length - 1,
      mid, element

    while (low <= high) {
      mid = Math.floor((low + high) / 2)
      element = this.arr[mid]
      if (item < element) {
        high = mid - 1
      } else if (item > element) {
        low = mid + 1
      } else {
        return mid
      }
    }

    return -1
  }
}

var count = 100
var bs = []
for (let i = 0; i < count; i++) {
  let random = ~~(Math.random() * count)
  bs.push(random)
}

console.log(bs.toString())
let binarySearch = new BinarySearch(bs)
console.log(binarySearch.arr.toString())
console.log(binarySearch.search(55))