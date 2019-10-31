function lamGiDo(cb) {
    setTimeout(function(){
        console.log(`lam gi do --- dang lam`);
        cb();
    }, 1000);
}

console.log(`---task 1---`);
lamGiDo(function(){
    console.log(`okir lam xong roi`);
})
console.log(`---task 2---`);