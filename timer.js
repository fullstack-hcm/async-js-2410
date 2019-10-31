// (function demo() {
//     console.log(`--task 1---`);
//     setTimeout(function(){
//        console.log(`wait 1s`); 
//     }, 1000);
//     console.log(`--task 2---`);
// })(); // IIFE || Function Expression

(function demo2() {
    setInterval(function(){
        console.log(`tick---`);
    }, 1000);
})();