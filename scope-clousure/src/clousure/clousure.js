const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`)
}

moneyBox(5)
moneyBox(10)



//Clousure Para que guarde el dinero
const moneyBox = () => {
    var saveCoins = 0

    const countCoins = (coins) => {
        saveCoins += coins
        console.log(`MoneyBox: ${saveCoins}`)
    }

    return countCoins;
}

//Guardamos la funcion que retorna la funcion
let myMoneyBox = moneyBox();

//Llamamos a la funcion que estaba dentro de la funcion, 
//pero esta funcion recuerda sus variables globales
myMoneyBox(2)
myMoneyBox(5)
myMoneyBox(3)