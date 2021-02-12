class Persona{

    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        var { nombre, apellido } = this
        console.log(`Hola me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido)
        }
    }

    soyAlto(){
        return this.altura > 1.75
    }
}

class Desarrollador extends Persona{

    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    
    saludar(fn){
        var { nombre, apellido } = this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrolador`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`Ah mirá, no sabía que eras dev.`)
    }
}

var pablo = new Persona('Pablo', 'Andrés', 1.78)
var joaquin = new Desarrollador('Joaquín', 'Perez', 1.91)
var rosa = new Persona('Rosa', 'Mosqueta', 1.81)

rosa.saludar()
pablo.saludar(responderSaludo)
joaquin.saludar(responderSaludo)
