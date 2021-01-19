var angel = {
    nombre: 'Angel',
    apellido: 'Zaragoza',
    edad: 21
}

function cumpleaños(persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
    //persona.edad += 1;
}

/**
 * Cuando pasamos por parametro un objeto y este lo modificamos dentro de la función,
 * el objeto global se modifica, debido a que javascript cuando pasamos el objeto, en vez
 * de crear uno nuevo lo hace por referencia. Pero en caso de que queramos que trabajar con
 * un objeto nuevo, podemos modificar con return
 */