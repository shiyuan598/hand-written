// 函数原型方法

// call/bind方法相当于把方法挂载到了指定的对象上,然后通过[对象][方法名]的方式调用
// let obj = {
//   name: "xcJxJx"
// };
// function getName() {
//   console.info(`My name is ${this.name}.`);
// }
// getName.call(obj);

// 即:
let obj = {
  name: "xcJxJx",
  getName: function getName() {
    console.info(`My name is ${this.name}.`);
  }
};
obj.getName(); // 这样调用,然后再删除函数

// call方法
Function.prototype.call2 = function (thisArg, ...args) {
  let context = thisArg || window;
  context.fn = this;
  let res = context[fn](...args);
  delete context.fn;
  return res;
};

// apply方法
Function.prototype.apply2 = function (thisArg, args) {
  let context = thisArg || window;
  context.fn = this;
  let res = context[fn](...args);
  delete context.fn;
  return res;
};

// bind方法
Function.prototype.bind2 = function (thisArg, ...args) {
  let thisFn = this;
  return function () {
    return thisFn.call(thisArg, ...args);
  };
};
