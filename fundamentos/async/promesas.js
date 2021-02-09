const API_URL = 'https://www.swapi.tech/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true }

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

function obtenerPersonaje(id){

    return new Promise((resolve, reject) =>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

        $.get(url, opts, function (data) {
            resolve(data)
        })
        .fail(()=>{ reject(id)});
    })

}

var ids = [1,2,3,4,5,6,7]

var promesas = ids.map(id => obtenerPersonaje(id))

Promise.all(promesas)
.then( personaje => {
    console.table(personaje)
})
.catch(onError)

// obtenerPersonaje(1)
// .then( personaje => {
//     console.log(`Mi nombre es ${personaje.result.properties.name}`)

//     return obtenerPersonaje(2)
// })
// .then( personaje => {
//     console.log(`Mi nombre es ${personaje.result.properties.name}`)

//     return obtenerPersonaje(3)
// })
// .then( personaje => {
//     console.log(`Mi nombre es ${personaje.result.properties.name}`)

//     return obtenerPersonaje(4)
// })
// .then( personaje => {
//     console.log(`Mi nombre es ${personaje.result.properties.name}`)

//     return obtenerPersonaje(5)
// })
// .then( personaje => {
//     console.log(`Mi nombre es ${personaje.result.properties.name}`)
// })
// .catch(onError)




