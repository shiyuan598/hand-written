// 实现数组原型的方法，
// push、pop、unshift、shift、map、forEach、filter、some、every、reduce
// push方法在数组尾部添加一个元素，返回数组的长度
// pop删除数组尾部的元素，数组长度减一，返回删除的元素
// unshift在数组头部添加一个元素，返回数组的长度
// shift删除数组头部元素，数组长度减一，返回删除的元素
// map方法接收一个函数，这个函数有三个参数-value, index, array,最后返回一个每一项由执行函数后结果组成的新数组
// forEach也接收同样的参数，对每个函数执行传入的函数
// filter接收一个参数，根据返回boolean值，决定哪些值被保留，结果是被保留值的数组
// some接收能返回boolean值的函数，对每一项执行该函数，如果有结果为true，最后的结果为true
// every同some，但要求执行函数后所有值为true时结果才为true
// reduce方法对数组中的每个元素按序执行一个由您提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
Array.prototype.push2 = function (...values) {
    values.forEach((v) => {
        let len = this.length;
        this[len] = v;
    });
    return this.length;
};

Array.prototype.pop2 = function () {
    let v = this[this.length - 1];
    this[this.length - 1] = null;
    this.length = this.length - 1;
    return v;
};

Array.prototype.unshift2 = function (value) {
    let len = this.length;
    for (let i = len; i > 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
    return this.length;
};

Array.prototype.shift2 = function () {
    let len = this.length;
    let v = this[0];
    for (let i = 0; i < len - 1; i++) {
        this[i] = this[i + 1];
    }
    this[len - 1] = null;
    this.length = len - 1;
    return v;
};

Array.prototype.map2 = function (callback, thisArg) {
    let res = [];
    let len = this.length;
    for (let i = 0; i < len; i++) {
        res.push(callback.call(thisArg, this[i], i, this));
    }
    return res;
};

Array.prototype.filter2 = function (callback, thisArg) {
    let res = [];
    let len = this.length;
    for (let i = 0; i < len; i++) {
        if (callback.call(thisArg, this[i], i, this)) {
            res.push(this[i]);
        }
    }
    return res;
};

Array.prototype.some2 = function (callback, thisArg) {
    let len = this.length;
    for (let i = 0; i < len; i++) {
        if (callback.call(thisArg, this[i], i, this)) {
            return true;
        }
    }
    return false;
};

Array.prototype.every2 = function (callback, thisArg) {
    let len = this.length;
    let count = 0
    for (let i = 0; i < len; i++) {
        if (callback.call(thisArg, this[i], i, this)) {
            count++;
        } else {
            break;
        }
    }
    return count === len;
};

Array.prototype.reduce2 = function(callback, initialValue, thisArg) {
    let total = initialValue;
    let len = this.length;
    for (let i = 0; i < len; i++) {
        total = callback.call(thisArg, total, this[i], i, this);
    }
    return total;
}

let arr = [6, 7, 8, 9];
let res = arr.shift2(2);
console.info(res, arr);

res = arr.map2((v) => v / 2);
console.info(res);
