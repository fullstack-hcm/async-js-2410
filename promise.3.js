function demo(name, ms) {
    return new Promise(resovle => {
        setTimeout(function(){
            // console.log(`hello ${name}`);
            return resovle(name);
        }, ms);
    })
};

// demo('a', 1000)
//     .then(nameFunc => {
//         demo('b', 2000)
//             .then(nameFunc2 => {
//                 demo('c', 3000)
//                     .then(nameFunc3 => {
//                         console.log(`done`);
//                     })
//             })
//     });

let runx = async () => {
    try {
        let resultA = await demo('a', 1000);
        let resultB = await demo('b', 2000);
        let resultC = await demo('c', 3000);
        console.log({ resultA, resultB, resultC });
    } catch (error) {
        console.log(err);
    }
}

runx();

// Promise all
let run = () => {
    let a = demo('a', 1000);
    let b = demo('b', 2000);
    let c = demo('c', 3000);

    Promise.all([a, b, c])
        .then(result => {
            console.log({ result });
        }).catch(err =>  {
            console.log({ err });
        })
}

// run();

let run2 = async () => {
    let a = demo('a', 1000);
    let b = demo('b', 2000);
    let c = demo('c', 3000);

    let [ resultA, resultB, resultC ] = await Promise.all([a, b, c]);
    console.log({ resultA, resultB, resultC  });
}

// run2();