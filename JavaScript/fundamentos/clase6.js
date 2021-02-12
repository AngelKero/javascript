var angel = {
    nombre: 'Angel',
    apellido: 'Zaragoza',
    edad: 21
}

var dario = {
    nombre: 'Dario',
    apellido: 'Sqwisde',
    edad: 25
}

//Podemos pasar un objeto completo como parametro imprimirNombreUpper(persona)
//Podemos obtener el valor de un atributo especifico con nombreFuncion({atributo})
function imprimirNombreUpper({nombre}){
    console.log(nombre.toUpperCase());
}

//Pasamos un valor de un objeto imprimirNombreUpper(angel.nombre);
//Pasamos el objeto entero imprimirNombreUpper(angel);
//Pasamos un atributo de objeto con {key: 'valor'}
imprimirNombreUpper(angel);
imprimirNombreUpper(dario);
imprimirNombreUpper({nombre: 'Pepito'});

//si enviamos un atributo con una key diferente dara error