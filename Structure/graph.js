const Dictionary = require('./dictionary')
const Queue = require('./queue')

class Graph {
  constructor() {
    this.vertices = []
    this.adjList = new Dictionary()
  }

  addVertex(v) {
    this.vertices.push(v)
    this.adjList.set(v, [])
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
  }

  toString() {
    return this.vertices.map(vertex => {
      return `${vertex} --> ${this.adjList.get(vertex).join(' ')}`
    }).join('\n')
  }

  initializeColor() {
    let color = {}
    this.vertices.forEach(item => {
      color[item] = 'white'
    })

    return color
  }

  bfs(v, callback) {
    let queue = new Queue(),
      color = this.initializeColor()
    queue.enqueue(v)

    while (!queue.isEmpty()) {
      let u = queue.dequeue(),
        neighbors = this.adjList.get(u)

      color[u] = 'grey'
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i]
        if (color[w] === 'white') {
          color[w] = 'grey'
          queue.enqueue(w)
        }
      }
      color[u] = 'black'

      callback && callback(u)
    }
  }

  BFS(v) {
    let queue = new Queue(), d = {}, pred = {},
      color = this.initializeColor()
    queue.enqueue(v)

    this.vertices.forEach(item => {
      d[item] = 0
      pred[item] = null
    })

    while (!queue.isEmpty()) {
      let u = queue.dequeue(),
        neighbors = this.adjList.get(u)

      color[u] = 'grey'
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i]
        if (color[w] === 'white') {
          color[w] = 'grey'
          d[w] = d[u] + 1
          pred[w] = u
          queue.enqueue(w)
        }
      }
      color[u] = 'black'
    }
    return {
      distances: d,
      predecessors: pred
    }
  }

  dfs(callback) {
    function dfsVisit(u, color, adjList, callback) {
      color[u] = 'grep'

      callback && callback(u)

      let neighbors = adjList.get(u)

      neighbors.forEach(item => {
        if (color[item] === 'white') {
          dfsVisit(item, color, adjList, callback)
        }
      })

      color[u] = 'balck'
    }
    
    let color = this.initializeColor()

    this.vertices.forEach(item => {
      if (color[item] === 'white') {
        dfsVisit(item, color, this.adjList, callback)
      }
    })
  }
}

let graph = new Graph()
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i])
}

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log(graph.toString())

function printNode(value) {
  console.log('Visited vertex: ' + value)
}
graph.bfs(myVertices[0], printNode)
console.log(graph.BFS(myVertices[0]))
graph.dfs(printNode)

console.log(graph)