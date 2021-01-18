var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

function frutasDentro(fruta){
    console.log(`Hay una ${fruta}`);
}

for (let i = 0; i < frutas.length; i++) {
    frutasDentro(frutas[i]);
}

for(var fruta of frutas){
    frutasDentro(fruta);
}

for(var fruta in frutas){
    frutasDentro(frutas[fruta]);
}
/*
Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:

for - recorre un bloque de código varias veces

for/in - recorre las propiedades de un objeto

for/of - recorre los valores de un objeto iterable

while - recorre un bloque de código mientras se cumple una condición específica

do/while - también recorre un bloque de código mientras se cumple una condición específica
*/