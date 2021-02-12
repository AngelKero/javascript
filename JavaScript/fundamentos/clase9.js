var x = 4, y = '4'

//Tratar de usae el === siempre que sea posible y no el ==

var sacha = {
    nombre: 'Sacha'
}

var otraPersona = {
    nombre: 'Sacha'
}

var otraPersona2 = sacha
//Si modificamos este objeto, se modificara el original por que 
//estamos haciendo referencia a memoria, no creando uno nuevo

var otraPersona3 = {
    ...sacha
}
//Si comparamos objetos, solo tendremos true si hacemos referencia al mismo objeto en memoria