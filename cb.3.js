function addNum(a, b, cb) {
    let total = a + b;
    if (total % 2 == 0)
        return cb(null, total);
    return cb(true, null);
}

addNum(1, 1, function(err, result){
    if (err)
        return console.log(`loi`);
    return console.log(`ketqua: ${result}`);
})