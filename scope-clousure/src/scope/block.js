const fruits = () => {
    if(true){
        var fruits1 = 'Apple'
        let fruits2 = 'Banana'
        const fruits3 = 'kiwi'

        console.log(fruits2)
        console.log(fruits3)
    }

    console.log(fruits1)
}
fruits()



let x = 1
{
    let x = 2
    console.log(x)
}
console.log(x)


const AnotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(()=>{
            console.log(i)
        }, 1000)
    }
}
AnotherFunction()