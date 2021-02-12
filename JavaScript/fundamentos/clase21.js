function heredaDe(prototipoHijo, prototipoPadre){
    var noop = function(){}
    noop.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new noop
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
};

Persona.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function(){
    return this.altura > 1.75
}

function Desarrollador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrolador`)
}


// const angel = new Persona('Angel', 'Zaragoza', 1.80)
// const erika = new Persona('Erika', 'Luna', 1.45)
// const arturo = new Persona('Arturo', 'Martinez', 1.73)

// angel.soyAlto()
// erika.soyAlto()
// arturo.soyAlto()
