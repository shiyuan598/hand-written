// 数组原型方法的实现

// map方法
Array.prototype.map2 = function (callback, thisArg) {
    let len = this.length;
    let res = [];
    for (let i = 0; i < len; i++) {
        const item = this[i];
        res[i] = callback.call(thisArg, item, i, this);
    }
    return res;
};

let arr = [1, 3, 5, 7];
let res = arr.map2((item, index) => {
    return item * (index + 1);
});
console.info(arr, res);

// foreach方法
Array.prototype.forEach2 = function (callback, thisArg) {
    let len = this.length;
    for (let i = 0; i < len; i++) {
        const item = this[i];
        callback.call(thisArg, item, i, this);
    }
};
arr.forEach2((item, index) => {
    console.info(item, index);
});

// filter方法
Array.prototype.filter2 = function (callback, thisArg) {
    let len = this.length;
    let res = [];
    for (let i = 0; i < len; i++) {
        const item = this[i];
        if (callback.call(thisArg, item, i, this)) {
            res.push(item);
        }
    }
    return res;
};

res = arr.filter2((item) => {
    return item <= 3;
});
console.info(res);

// some、every方法

// reduce