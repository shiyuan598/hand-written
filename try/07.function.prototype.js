// call、apply、bind
Function.prototype.call2 = function (thisArg, ...args) {
    let context = thisArg || window;
    let fn = Symbol();
    context[fn] = this;
    let res = context[fn](...args);
    delete context[fn];
    return res;
};

Function.prototype.apply2 = function (thisArg, args) {
    let context = thisArg || window;
    let fn = Symbol();
    context[fn] = this;
    let res = context[fn](...args);
    delete context[fn];
    return res;
};

Function.prototype.bind2 = function(thisArg, ...args) {
    let thisFn = this;
    return function() {
        return thisFn.call(thisArg, ...args);
    }
}

let user = {
    name: "peanut",
    age: 1
}
function getName(a, b, c) {
    console.info(`My name is ${this.name}. a: ${a}, b: ${b}, c: ${c}.`);
    return "hahh";
}

getName.call2(user, 1, 2, 3);
getName.apply2(user, [5, 6, 7]);
console.info(getName.bind2(user, "m", "n", "k")());
