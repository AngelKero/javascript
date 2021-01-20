const API_URL = 'https://www.swapi.tech/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true }

//Remplazar con a la funcion anonima de $.get() con esta
const onResponce = function(person){
    console.log(`Mi nombre es ${person.result.properties.name}`);
}

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, callback)
    .fail(()=>{
        console.log(`Ocurrio un error. No se pudo obtener el personaje ${id}`)
    });
}

//Las repuestas llegaran en cualquier momento
// for (let i = 1; i <= 10; i++) {
//     obtenerPersonaje(i)
// }


//callback hell
obtenerPersonaje(1, function(person){
    console.log(`Mi nombre es ${person.result.properties.name}`);

    obtenerPersonaje(2, function(person){
        console.log(`Mi nombre es ${person.result.properties.name}`);

        obtenerPersonaje(3, function(person){
            console.log(`Mi nombre es ${person.result.properties.name}`);

            obtenerPersonaje(4, function(person){
                console.log(`Mi nombre es ${person.result.properties.name}`);

                obtenerPersonaje(5, function(person){
                    console.log(`Mi nombre es ${person.result.properties.name}`);

                    obtenerPersonaje(6, function(person){
                        console.log(`Mi nombre es ${person.result.properties.name}`);

                        obtenerPersonaje(7, function(person){
                            console.log(`Mi nombre es ${person.result.properties.name}`);
                        })
                    })
                })
            })
        })
    });
});



