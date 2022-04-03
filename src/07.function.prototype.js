// 函数原型方法

// call方法
Function.prototype.call2 = function(thisArg, ...args) {
    let context = thisArg || window;
    context.fn = this;
    let res = context[fn](...args);
    delete context.fn;
    return res;
}

// apply方法
Function.prototype.apply2 = function(thisArg, args) {
    let context = thisArg || window;
    context.fn = this;
    let res = context[fn](...args);
    delete context.fn;
    return res;
}

// bind方法
Function.prototype.bind2 = function(thisArg, ...args) {
    let thisFn = this;
    return function() {
        return thisFn.call(thisArg, ...args);
    }
}