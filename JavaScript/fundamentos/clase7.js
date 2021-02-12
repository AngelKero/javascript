var angel = {
    nombre: 'Angel',
    apellido: 'Zaragoza',
    edad: 21
}

function imprimirNombreUpper(persona){
    /* 
    *Para ahorrar codigo al acceder al atributo de un objeto 
    cuando declaramos una variable, ponemos el nombre de la varibale
    entre llaves {}
    */
    //var nombre = persona.nombre
    var {nombre} = persona;
    console.log(nombre.toUpperCase());
}

imprimirNombreUpper(angel);

var ulises = {
    nombre: 'Ulises',
    apellido: 'Zaragoza',
    edad: 23
}

function imprimirNombreEdad(persona){
    var {nombre} = persona,
        {edad}   = persona;

    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreEdad(ulises)



