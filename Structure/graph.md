# 图
图是一组由边连接的节点（或顶点）。  
由一条边连接在一起的顶点称为`相邻顶点`。  
一个顶点的`度`是其相邻顶点的数量。  
图可以是`无向的（边没有方向）`或是`有向的（有向图）`。  
图还可以是`未加权的`或是`加权的`。  

## 图的表示
1. 邻接矩阵  
每个`节点`都和一个`整数`相关联，该整数将作为`数组的索引`。用一个`二维数组`来表示`顶点之间的连接`。
2. 邻接表  
每个顶点的`相邻顶点`列表所组成。
3. 关联矩阵  
矩阵的`行`表示`顶点`，`列`表示`边`。  

## 图的遍历
- 广度优先搜索（Breadth-First Search，BFS）  
使用`栈`实现。  
通过将顶点存入栈中，顶点是沿着路径被探索的，存在新的相邻顶点就去访问。  
`先广度后深度`地访问顶点。  
- 深度优先搜索（Depth-First Search，DFS）  
使用`队列`实现。  
通过将顶点存入队列中，最先入队列的顶点先被探索。  
`先深度后广度`地访问顶点。  

## 图方法
1. addVertex   添加顶点
2. addEdge    添加顶点关联
3. toString   打印图

## 图实现
```js
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
```

## 测试
```js
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
```