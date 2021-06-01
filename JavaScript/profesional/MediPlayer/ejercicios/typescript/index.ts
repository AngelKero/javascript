// Boolean
let muted: boolean = true;
muted = false;

// Numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = 'Angel';
let saludo: string = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
// people.push(34)

let peopleAndAges: Array<string | number> = [];
peopleAndAges.push(34);
peopleAndAges.push('Loer');
// peopleAndAges.push(true);


// Enums
enum Colors {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}
let colorFavorito: Colors = Colors.Rojo;
console.log(`Mi color favorito es el ${colorFavorito}`);


// Any
let comodin: any = 'Joker';
comodin = {type: "WildCard"};


// Object
let someObjet: object = {type: "WildCard"};




/*-------- Funciones ---------*/
// No retorna Nada
function hello(): void {
    console.log('Hello World!')
    // No se puede usar return
}


// Retorna un dato primitivo
function add(a: number, b: number): number {
    return a + b;
}
const sum = add(5, 7);


// Retorna una funcion
function createAdder(a: number): (num1: number) => number {
    return function(b: number): number {
        return a + b;
    }
}
const addFour = createAdder(4);
const fourPlus6 = addFour(6);


// Parametros Opcionales
function fullName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
}
const angel = fullName('Angel');
console.log(angel)


// Parametros con valor por defecto
function fullName2(firstName: string, lastName: string = 'Zaragoza'): string {
    return `${firstName} ${lastName}`;
}
const angel2 = fullName2('Angel');
console.log(angel2)




/*-------- Interfaces ---------*/
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
}

let rectangulo: Rectangulo = {
    ancho: 4,
    alto: 8,
    color: Color.Verde
}

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect = area(rectangulo);
console.log(areaRect);

rectangulo.toString = function(): string {
    return this.color ? `Un rectangulo ${this.color}` : 'Un rectangulo';
}
console.log(rectangulo.toString())