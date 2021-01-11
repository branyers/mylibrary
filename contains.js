let arreglo = {}

let age = [20, 30, 40, 50, 60, 70, 80, 90, 100]
let fruits = ["Apple", "oranges", "Pinaples", "Manzana"]


arreglo.contains = (arr, value) => {
    for (let arrValue of arr) {
        if (arrValue === value) {
            return true
        }
    }
    return false
}

console.log(arreglo.contains(age, 20))