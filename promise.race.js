// Promise.race

function demo(name, ms) {
    return new Promise(resovle => {
        setTimeout(function(){
            // console.log(`hello ${name}`);
            return resovle(name);
        }, ms);
    })
};

let runx = async () => {
    try {
        let a = demo('a', 1000);
        let b = demo('b', 2000);
        let c = demo('c', 3000);

        let [resultA, resultB, resultC] = await Promise.race([a, b, c]);
        console.log({ resultA, resultB, resultC });
    } catch (error) {
        console.log(err);
    }
}

runx();