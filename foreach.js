let numbers = [10, 20, 30]


function biggerthan1(numero) {
    console.log(numero)
}
let arreglo = {};

arreglo.each = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i])

    }
}



let arr = [1, 2, 3, 4, 5, 6, 7, 8]

arreglo.each(arr, saludo)