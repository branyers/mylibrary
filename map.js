let arreglo = {}

let num = [1, 2, 3, 4, 5, 6, 7]

arreglo.map = (arr, callback) => {
    let data = []
    for (let i = 0; i < arr.length; i++) {
        data.push(callback(arr[i]))
    }
    return data
}

function mult2(num) {
    return num * 4
}

const resultado = arreglo.map(num, mult2)

console.log(resultado)