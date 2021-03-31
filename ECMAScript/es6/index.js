//**Default Params */
//ES5
function name(name, age, country) {
    var name = name ||'Angel';
    var age  = age  || 21;
    var country = country || 'Mexico';

    console.log(name, age, country)
}
//ES6
function newFunction(name = 'Angel', age = 21, country = 'Mexico'){
    console.log(name, age, country)
}

newFunction()
newFunction('Oscar',  32, 'CO')


//**Conatenación */
let hello = "Hello"
let world = "World"
//ES5
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)
//ES6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)


//**Multilinea */
//ES5
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n'
+ 'otra frase que ocupamos'
//ES6
let lorem2 = `Otra frase epica que nesecitamos,
de nuevo otra frase epica`


//**Desestructuración */
//ES5
let person = {
    'name': 'Angel',
    'age': 21,
    'country': 'Mexico'
}
console.log(person.name, person.age, person.country)
//ES6
let {name, age, country} = person;
console.log(name, age, country)


//*Agregar valores Objetos
let nameO = 'Oscar'
let ageO = 21
//ES5
let obj = {
    nameO: nameO,
    ageO: ageO
}
//ES6
let obj2 = {nameO, ageO}
console.log(obj2)


//*Arrows Functions
const namesO = [
    {name: 'Angel', age: 21},
    {name: 'Yessica', age: 23}
]
//ES5
let listOfNames = namesO.map(function (item) {
    console.log(item.name)
})
//ES6
let listOfNames2 = namesO.map(({name}) => console.log(name))
const listOfNames3 = (name, age, country)=>{
    //...
}
const listOfNames4 = name => {
    //...
}
const square = num => num * num;
console.log(square(3))



//*Promesas
const helloPromise = () => new Promise((resolve, reject) => {
    if (true) {
        resolve('Hey!')
    } else {
        reject('Ups!')
    }
});

helloPromise()
.then(response => console.log(response))
.then(() => console.log('Si'))
.catch(error => console.log(error))



//*Clases
class Calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sumar(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }

}
const calc = new Calculator()
console.log(calc.sumar(3, 7))



//*Modulos
import hello from './module';
console.log(hello())



//*Generadores
function* helloWorld(){
    if (true) {
        yield 'Hello, '
    }
    if (true) {
        yield 'World!'
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
