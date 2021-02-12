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

async function obtenerPersonajes(){

    var ids = [1,2,3,4,5,6,7]
    var promesas = ids.map(id => obtenerPersonaje(id))

    try {

        var personajes = await Promise.all(promesas)

        for (const personaje of personajes) {
            console.log(`Mi nombre es ${personaje.result.properties.name}`);
        }

    } catch (id) {
        onError(id);
    }

}

obtenerPersonajes();



