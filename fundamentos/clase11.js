var sacha = {
    nombre: 'Sacha',
    edad: 27
}

var juan = {
    nombre: 'Juan',
    edad: 15
}

const MAYORIA_DE_EDAD = 18

//Usar const para dar a entender que es una funcion
//Si solo tenemos un parametro, podemos quitar los parentesis
//Si haces comparaciones en return te retornara un booleano
const mayoriaDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD
/*
*Version larga
const mayoriaDeEdad = function(persona){
    return persona.edad >= MAYORIA_DE_EDAD
} 
*/

function imprimirMayoriaDeEdad(persona) {
    if(mayoriaDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

/*
const permitirAcceso =  (persona) => {
    if(!mayoriaDeEdad(persona)){
        console.log('Acceso denegado')
    }
}
*/

const permitirAcceso =  persona                        =>//function
                        !mayoriaDeEdad(persona)        ? //if
                        console.log('Acceso Denegago') : //true
                        console.log('Bienvenido')      ; //false