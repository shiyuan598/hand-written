// es6中可以使用Array.prototype.flat
let arr = [1, 3, 5, [7, [9, [11]]], 12];
let res = arr.flat(Infinity);
console.info(res);

function flatArray(arr) {
    // version 1.0
    // let res = [];
    // for (let i = 0; i < arr.length; i++) {
    //     const item = arr[i];
    //     if (Array.isArray(item)) {
    //         res = res.concat(flatArray(item));
    //     } else {
    //         res = res.concat(item);
    //     }
    // }
    // return res;

    // version 1.1
    // let res = [];
    // for (let i = 0; i < arr.length; i++) {
    //     const item = arr[i];
    //     res = res.concat(Array.isArray(item) ? flatArray(item) : item);
    // }
    // return res;

    // version 1.2
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatArray(cur) : cur);
    }, []);
}

console.info(flatArray(arr));
