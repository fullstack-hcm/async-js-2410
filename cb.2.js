function thucDay(lamGiTiep) {
    console.log(`thuc day`);
    lamGiTiep();
}

function ruaMat(lamGiTiep) {
    console.log(`rua mat`);
    lamGiTiep();
}

function anSang(lamGiTiep) {
    console.log(`an sang`);
    lamGiTiep();
}

function anyTask(lamGiTiep) {
    console.log(`---`);
    lamGiTiep();
}

thucDay(function(){
    ///
    ///
    ///
    ///
    ///
    ///
    ruaMat(function(){
    ///
    ///
    ///
    ///
    ///
    ///
        anSang(function(){
            anyTask(function(){
                console.log(`--done---`);
            })
        })
    })
})

// thucDay(ruaMat(anSang()))
// callback hell

// error first
fs.readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    console.log(data);
});