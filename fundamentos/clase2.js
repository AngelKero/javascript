var nombre = 'Angel', 
    apellido = 'Zaragoza';

var nombreMayusculas = nombre.toUpperCase();
var apellidoMinusculas = apellido.toLocaleLowerCase();

var primerLetra = nombre.charAt(0);
var cantidadLetras = nombre.length;


var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;

var str = nombre.substr(1, 2);u

var ultimaLetra = nombre.charAt(nombre.length - 1);

/**
 * Va el Review:

str.toUpperCase() - Cambia el string a mayúsculas
str.toLowerCase() - Cambia el string a minúsculas
str.charAt() - Trae el carácter en la posición en, requiere el parámetro de la posición del 
carácter al que queremos acceder.
*** El 1er caracter de todo string se encuentra en la posición 0. str.charAt(0) .

str.length - Se llama al atributo length, que entrega la cantidad de letras que contiene un string.
Interpolación de variables :
Se realiza con las comillas invertidas “``”:

${var1} ${var2}

*** Dentro de las llaves se puede escribir código js.

${str.toUpperCase()}

str.substr(posicion, número de caracteres a traer) - trae una subcadena, la cual es cortada 
dependiendo del 1er parámetro que es desde donde queremos que empiece y del 2ndo parámetro 
que es cuántos caracteres queremos que traiga la subcadena.
 */