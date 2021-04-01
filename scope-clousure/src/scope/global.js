var hello = 'Hello'
var hello = 'Hello++'
let world = 'World'
let world = 'World++'
const helloWorld = 'Hello World!'

const anotherFunction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

anotherFunction()

const helloWorld = () => {
    globalVar = 'im a global'
}

helloWorld()
console.log(globalVar)


const anotherFunction = () => {
    var localVar = globalVar = 'Im global'
}
anotherFunction()
console.log(globalVar)