var p1 = new Promise((resolve, reject) => {
    resolve('hello');
})
    .then(result => result)
    .catch(e => e);

var p2 = new Promise((resolve, reject) => {
   reject(123)
})
    .then(result => result)

Promise.all([p1,p2])
    .then(function(value) {
        console.log(value);
    })
    .catch(function(re) {
        console.log(re);
    })
