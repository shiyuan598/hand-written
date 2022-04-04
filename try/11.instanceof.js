// 检查右操作数的原型是否在左操作数的原型链上
function isInstanceof(obj, F) {
    if (typeof F !== "function") {
        throw new TypeError("F必须为函数。")
    }
    let prototype = F.prototype;
    let proto = obj.__proto__;
    while(proto) {
        if (proto === prototype) {
            return true;
        } else {
            proto = proto.__proto__;
        }
    }
    return false;
}

class A {}
class B extends A {}
class C extends B {}

let c = new C();
let res = isInstanceof(c, Object);
console.info(res);