function createRandom(a, b) {
    return new Promise(function(resolve, reject){
        let total = a + b;
        if (total % 2 == 0) 
            return resolve(total);
        return reject('LOI ROI, ODD')
    })
}

function log(x) {
    return x % 2 === 0 ? console.log(`so chan`) : console.log(`so le`);
}

createRandom(1, 1)
    .then(result => {
        console.log(`-----${result}----`);
        log(result);
    })
    .catch(err => console.log(err))

/**
 * Pending
 * success
 * error
 */