let arreglo = {}

let age = [1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 0, 1]


arreglo.without = (arr, ...arguments) => {
    let data = []
    let auxiliar = 0
    for (let array of arr) {
        for (let arg of arguments) {
            if (arg == array) {
                auxiliar += 1
            }
        }
        if (auxiliar) {
            auxiliar = 0
        } else {
            data.push(array)
        }
    }
    return data
}

console.log(arreglo.without(age, 0, 1))