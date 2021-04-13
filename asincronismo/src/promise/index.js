const somethingWillHapped = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!');
        } else{
            reject('Upps!')
        }
    });
};

// somethingWillHapped()
// .then(response => {
//     console.log(response);
// }).catch(error => {
//     console.log(error);
// });

const somethingWillHapped2 = () =>  {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve(true);
            }, 2000);
        } else{
            const error = new Error('Whoopss!');
            reject(error);
        }
    });
}
// somethingWillHapped2()
// .then(response => {
//     console.log(response);
// }).catch(error => {
//     console.log(error);
// });

Promise.all([somethingWillHapped(), somethingWillHapped2()])
.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
