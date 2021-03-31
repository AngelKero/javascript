//*Parse Object to Matriz
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)


//*Parse Object to Array
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data)
console.log(values)



//*Paddings
const string = 'hello';
console.log(string.padStart(string.length + 2, 'hi'))
console.log(string.padEnd(string.length + 4, 'hi'))


const obj = {
    frontend: 'Oscar',
}