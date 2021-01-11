let arreglo = {}


let age = [20, 30, 40, 50, 60, 70, 80, 90, 100]

function printIndexOf(filter) {
    console.log(filter)
}

arreglo.findIndex = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            printIndexOf(arr.indexOf(arr[i]))
        }
    }
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


function getIndex(num) {
    return num == 40
}


const data = arreglo.findIndex(age, getIndex)