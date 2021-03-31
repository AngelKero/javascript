const helloWorld = () => new Promise((resolve,reject) => 
    (true)
        ? setTimeout(() => resolve('Hello World!'), 3000)
        : reject(new Error('Test Error'))
)

const helloAsync = async () => await helloWorld()

helloAsync().then(hello => console.log(hello))