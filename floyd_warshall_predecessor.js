const printMatrix = (title, matrix) => {
    console.log(title)
    matrix.map(row => console.log(row))
    console.log()
}

const graph = [
    [0, [[1, "3"],[2, "8"], [4, "-4"]]],
    [1, [[3, "1"], [4, "7"]]],
    [2, [[1, "4"]]],
    [3, [[0, "2"], [2, "-5"]]],
    [4, [[3, "6"]]]
]

const matrix = []
const predecessor = []

for (let i=0; i < graph.length; i++) {
    const [_, adjacentList] = graph[i]
    const matrixRow = new Array(graph.length).fill(Infinity)
    const predecessorRow = new Array(graph.length).fill(null)
    matrixRow[i] = 0

    for (const adjacentVertex of adjacentList) {
        const [vertexNumber, weight] = adjacentVertex
        matrixRow[vertexNumber] = parseInt(weight)
        predecessorRow[vertexNumber] = i !== vertexNumber && weight < Infinity ? i : predecessorRow[i] 
    }
    matrix.push(matrixRow)
    predecessor.push(predecessorRow)
}

printMatrix("D(0)", matrix)
printMatrix("Π(0)", predecessor)


for (let k=0; k<graph.length; k++) {
    for (let i=0; i<graph.length; i++) {
        for (let j=0; j<graph.length; j++) {
            if(matrix[i][j] > matrix[i][k] + matrix[k][j]) {
                matrix[i][j] = matrix[i][k] + matrix[k][j]
                predecessor[i][j] = predecessor[k][j] 
            } 
        }
    }
    printMatrix(`D(${k+1})`, matrix)
    printMatrix(`Π(${k+1})`, predecessor)
}
