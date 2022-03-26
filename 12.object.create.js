// Object.create()方法创建一个新对象，使用现有的对象提供新创建对象的__proto__,
// 参数：
// Object.create(proto, [propertiesObject])
// proto参数为新创建对象的原型对象
// propertiesObject参数不为undefined时，其自有可枚举属性会被添加到新创建的对象上，即Object.defineProperties()方法的第二个参数
// 返回值：
// 一个新对象，带着指定的原型及属性
// 其他：
// 如果proto参数不是null或非原始包装对象就会报错
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
Object.create2 = function(proto, propertiesObject) {
    if (typeof proto !== "object" && typeof proto !== "function") {
        throw new Error("proto参数类型错误！");
    }
    function F() {}
    F.prototype = proto;
    let obj = new F();
    if (propertiesObject) {
        Object.defineProperties(obj, propertiesObject);
    }
    return obj;
}

let obj = Object.create2({name: "peanut"});
console.info(obj.__proto__);