let arreglo = {}


let arr = [10, 20, 30, 40, 50, 60]



arreglo.filter = (arr, callback) => {
    let data = []
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            data.push(arr[i])
        }
    }
    return data;
}

function filtro(arr) {
    return arr > 30
}



function filterEdad(user) {
    return user.edad > 20
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

const dataUser = arreglo.filter(user, filterEdad)

console.log(dataUser)