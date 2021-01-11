let arreglo = {}


let age = [20, 30, 40, 50, 60, 70, 80, 90, 100]



arreglo.find = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            printFilter(arr[i])
        }
    }
}


function printFilter(filter) {
    console.log(filter)
}

function edadFind(edad) {
    return edad == 20
}

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

function getName(user) {
    if (user.edad == 20) {
        return user.nombre
    }
}

const name = arreglo.find(user, getName)