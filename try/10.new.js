// new 四件事
// 1.创建一个空的新对象
// 2.给对象进行原型连接
// 3.把this设置为新对象执行构造函数
// 4.如果构造函数没有显式的返回则返回这个新对象
function Create(Constructor, ...args) {
    if (typeof Constructor !== "function") {
        throw new Error("Constructor必须是函数。")
    }
    let obj = {};
    obj.__proto__ = Constructor.prototype;
    let res = Constructor.call(obj, ...args);
    if (res) {
        return res;
    }
    return obj;
}