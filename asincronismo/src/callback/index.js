function suma(a, b){
    return a + b;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(6, 2, suma))

function date(callback){
    console.log(new Date)
    setTimeout(function(){
        let date = new Date;
        callback(date)
    } , 2000)
}

function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);