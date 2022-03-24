// 数组原型方法的实现

// 1.push 尾部添加元素，返回数组长度
Array.prototype.push2 = function (...items) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        this[this.length] = item;
    }
    return this.length;
};

let arr = [3, 5];
console.info(arr.push2(7));
console.info(arr);

// 2.unshift 头部添加元素，返回数组长度
Array.prototype.unshift2 = function (value) {
    let len = this.length;
    for (let i = len; i > 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
    return this.length;
};

arr = [1, 3, 5];
console.info(arr.unshift2(7));
console.info(arr);

// 3.pop尾部删除，返回被删除的元素
// 先获取最后一个元素，数组长度减1， 返回已经获取的元素
Array.prototype.pop2 = function () {
    let len = this.length;
    let res = this[len - 1];
    this[len - 1] = null;
    this.length = len - 1;
    return res;
};

arr = [1, 3, 5, 7];
console.info(arr.pop2());
console.info(arr);

// 4.shift头部删除，返回被删除的元素
Array.prototype.shift2 = function () {
    let len = this.length;
    let res = this[0];
    for (let i = 0; i < len - 1; i++) {
        this[i] = this[i + 1];
    }
    this[len - 1] = null;
    this.length = len - 1;
    return res;
};

arr = [1, 3, 5, 7];
console.info(arr.shift2());
console.info(arr);

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

arr = [1, 3, 5, 7];
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

// some方法
Array.prototype.some2 = function (callback, thisArg) {
    let res = false;
    let len = this.length;
    for (let i = 0; i < len; i++) {
        const item = this[i];
        if (callback.call(thisArg, item, i, this)) {
            return true;
        }
    }
    return res;
};

arr = [1, 3, 5, 7];
res = arr.some2((item, index) => {
    console.info(item, index);
    return item >= 6;
});
console.info(res);

// every方法
Array.prototype.every2 = function (callback, thisArg) {
    let count = 0;
    let len = this.length;
    for (let i = 0; i < len; i++) {
        const item = this[i];
        if (!callback.call(thisArg, item, i, this)) {
            break;
        } else {
            count++;
        }
    }
    return count === len;
};

arr = [1, 3, 5, 7];
res = arr.every2((item, index) => {
    console.info(item, index);
    return item <= 16;
});
console.info(res);

// reduce方法
Array.prototype.reduce2 = function (callback, initialValue) {
    let total = initialValue;
    let len = this.length;
    for (let i = 0; i < len; i++) {
        const item = this[i];
        total = callback(total, item, i, this);
    }
    return total;
};

arr = [1, 2, 3, 4, 5];
res = arr.reduce2((t, v, i, arr) => {
    t += v;
    return t;
}, 0);
console.info(arr);
console.info(res);