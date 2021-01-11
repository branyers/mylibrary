let arreglo = {}

let user = [{
        nombre: "Branyes",
        correo: "branyernunez@gmail.com",
        edad: 22,
    },

    {
        nombre: "Rosmeiry",
        correo: "rosmeiry@gmail.com",
        edad: 20,
    }
]



arreglo.pluck = (arr, value) => {
    let data = [];
    for (let arrValue of arr) {
        data.push(arrValue[value])
    }
    return data
}

console.log(arreglo.pluck(user, "edad"))