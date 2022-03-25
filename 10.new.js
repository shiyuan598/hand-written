// new 操作的四件事
// 1.创建一个空的新对象
// 2.给对象进行原型连接
// 3.绑定this为新对象，执行构造函数，进行属性的赋值
// 4.如果构造函数没有显式的返回，那么就返回这个新对象
function objFactory() {
    let obj = {};
    let Constructor = Array.prototype.shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    let res = Constructor.apply(obj, arguments);
    if (res) {
        return res;
    }
    return obj;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let p = objFactory(Person, "peanut", 1);
console.info(p);
