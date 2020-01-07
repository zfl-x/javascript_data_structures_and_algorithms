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

var count = 1000
var bs = []
var bs1 = []
for (let i = 0; i < count; i++) {
  let random = ~~(Math.random() * count)
  bs.push(random)
  bs1.push(random)
}

// console.log(bs.toString())
console.time('bs')
bubbleSort(bs)
console.timeEnd('bs')
// console.log(bs.toString())

function bbs(array) {
  var length = array.length; //{1}
  for (var i = 0; i < length; i++) { //{2}
    for (var j = 0; j < length - 1; j++) { //{3}
      if (array[j] > array[j + 1]) { //{4}
        var aux = array[j];
        array[j] = array[j+1];
        array[j+1] = aux;
      }
    }
  }
};

// console.log(bs1.toString())
console.time('bs1')
bbs(bs1)
console.timeEnd('bs1')
// console.log(bs1.toString())