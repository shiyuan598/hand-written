// instanceof即是判断 右操作数（构造函数）的原型是否在左操作数的原型链上

function instanceof2 (obj, Fn) {
    let prototype = Fn.prototype;
    let proto = obj.__proto__;
    while(proto){
        if (proto === prototype) {
            return true;
        }
        proto = proto.__proto__;
    }
    return false;
}

console.info(instanceof2({}, Object));

function F() {}
function S() {}
Object.setPrototypeOf(S.prototype, F.prototype);
let s = new S();
console.info(instanceof2(s, F));