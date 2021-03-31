/**
 * Spread Operator
 */
const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
};

let {country, ...all} = obj;
console.log(all)


/**
 * Porpagation Properties
 */
const person = {
    name: 'Oscar',
    age: 32
};

const obj1 = {
    country: 'MX',
    ...person,
}
console.log(obj1)



/**
 * Promise Finally
 */
const helloWorld = () => new Promise((resolve, reject) =>
    true 
    ? setTimeout(() => resolve('Hello World!'), 2000) 
    : reject(new Error('Test Error'))
)

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'))



/**
 **Regex
*/
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2020-03-31')
console.log(match);
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);