var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];



var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
})


var encuantraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

/**
 * A modo de recopilación:

.filter : nos permite filtrar solo los elementos que deseamos (según ciertos criterios) 
          y devolverlos en un nuevo array.
.map : crea un nuevo array con los resultados de la llamada a la función indicada 
       aplicados a cada uno de sus elementos.

find() : Devuelve el primer elemento del array que cumpla con la condición dada
foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
filter() : Devuelve todos los elementos del array que cumplan con la condición dada
 */