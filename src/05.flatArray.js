// 1.es6提供了Array.prototype.flat

// 2.使用concat, 要点在于concat方法接收到数组参数时，会将数组参数内的元素添加到连接的新数组中，即展开数组参数
// 普通数值参数直接进行连接
function flatten(arr) {
    while (arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr); // 每次通过扩展运算符展开数组，再使用concat连接会把里面的层级即降低一层
    }
    return arr;
}

let testArray = [1, [2, [3, [4, [5, [6, [7, [[[[[[8, ["ha"]]]]]]]]]]]]]];
let result = flatten(testArray);
console.log(result);

// 3.递归
function flatten2(arr) {
    let res = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        const item = arr[i];
        if (Array.isArray(item)) {
            res = res.concat(flatten2(item));
        } else {
            res.push(item);
        }
    }
    return res;
}

console.log(flatten2(testArray));

// 4.reduce
function flatten3(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten3(cur) : cur);
    }, []);
}
console.log(flatten3(testArray));