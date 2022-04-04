// create有两个参数proto, propertiesObj
// proto参数提供新创建对象的原型，propertiesObj的可枚举属性会添加到新创建的对象上
Object.create2 = function (proto, propertiesObj) {
    let obj = {};
    obj.__proto__ = proto;
    if (propertiesObj) {
        Object.defineProperties(obj, propertiesObj);
    }
    return obj;
};
let obj = Object.create2({ name: "peanut" });
console.info(obj.__proto__);
