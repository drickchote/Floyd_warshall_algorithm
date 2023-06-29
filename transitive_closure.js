const printMatrix = (title, matrix) => {
    console.log(title)
    matrix.map(row => console.log(row))
    console.log()
}

const graph = [
    [0, [[1, "3"],[3, "7"]]],
    [1, [[0, "8"], [2, "2"]]],
    [2, [[0, "5"], [3, "1"]]],
    [3, [[0, "2"]]]
]

const matrix = []

for (let i=0; i < graph.length; i++) {
    const [_, adjacentList] = graph[i]
    const matrixRow = new Array(graph.length).fill(0)
    matrixRow[i] = 1

    for (const adjacentVertex of adjacentList) {
        const [vertexNumber] = adjacentVertex
        matrixRow[vertexNumber] = 1
    }
    matrix.push(matrixRow)
}

printMatrix("D(0)", matrix)


for (let k=0; k<graph.length; k++) {
    for (let i=0; i<graph.length; i++) {
        for (let j=0; j<graph.length; j++) {
            matrix[i][j] = matrix[i][j] || (matrix[i][k] && matrix[k][j])
        }
    }
    printMatrix(`D(${k+1})`, matrix)
}
