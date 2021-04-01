const person = () => {
    var saveName = 'Name'

    return {
        getName: () => {
            return saveName
        },
        setName: (name) => {
            saveName = name
        }
    }
}

const juan = person()
console.log(angel.getName())

juan.setName('Juan')
console.log(angel.getName())