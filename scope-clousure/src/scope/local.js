const helloWorld = () => {
    const hello = 'Hello World'
    console.log(hello)
}

helloWorld()

console.log(hello)



var scope = 'Im global'
const functionScope = ()=>{
    var scope = 'Im just a local'
    const func = () => escope
    console.log(scope)
}
functionScope()
console.log(scope)