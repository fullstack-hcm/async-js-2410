let arrDemo = [1, 2, 3];

let myMap = (arr, cb) => {
    let newArr = [];
    for (let i in arr) {
        newArr.push(cb(arr[i] + 1))
    }
    return newArr;
}

let myFilter = (arr, cb) => {
    let newArr = [];
    for (let i in arr) {
        if (cb(arr[i]))
            newArr.push(arr[i])
        // cb(arr[i]) && newArr.push(arr[i])
    }
    return newArr;
}

myMap(arrDemo, x => x * 2)
myFilter(arrDemo, x => x >= 2)