var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas = [sacha, alan, martin, dario, vicky, paula]


const esAlta = ({altura}) => altura > 1.8
const esBaja = persona => !esAlta(persona)
const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

//filter ya pasa por parametro el array y tambien lo recorre
/*
*Segunda manera 
var personasAltas = personas.filter(function(){
    return persona.altura > 1.8
})
*/
var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)
var personasCms = personas.map(pasarAlturaACms)
console.log(personasAltas)
console.log(personasBajas)
console.table(personasCms)
console.table(personas)

/**
 * Filter te devuelve los arrays con las condiciones indicadas
 * Map te modifica el array que le pases con las condiciones indicadas
 */