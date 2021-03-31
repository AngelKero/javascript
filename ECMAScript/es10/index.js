//*APlanar Matrizes
let array = [1,2,3, [1,2,3, [1,2,3]]]
console.log(array.flat(3))

let array = [1,2,3,4,5]
console.log(array.flatMap((value) => [value, value * 2]))


//----------------trim---------------------------/
let hello = '        hello world!       '
console.log(hello)
console.log(hello.trimStart()); // inicio
console.log(hello.trim())
console.log(hello.trimEnd()); // final




//-------------optional catch biding-------------/
try {
    
} catch {
    console.log(error)
}



//-------------fromEntries----------------------/
//Tranformar arreglos a objetos
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))



//-------------symbol object--------------------/
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol)
console.log(symbol.description)