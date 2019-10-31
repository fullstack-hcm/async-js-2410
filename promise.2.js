function addNum(a, b, cb) {
    let total = a + b;
    if (total % 2 == 0)
        return cb(null, total);
    return cb(true, null);
}

let addNumPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        addNum(a, b, (err, result) => {
            if (err) return reject(`loi roi`);
            resolve(result);
        });
    })
}   

addNumPromise(1, 2)
    .then(result => console.log(result))
    .catch(err => console.log(err))