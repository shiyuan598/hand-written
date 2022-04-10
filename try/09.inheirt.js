// class 继承，extends
class A extends Array {
    getLength() {
        return `My length is ${this.length}.`;
    }
}
let a = new A();
a.push(2);
a.push(4);
console.info(a, a[0], a.getLength());

// 组合继承
function F(name) {
    this.name = name;
}
F.prototype.getName = function () {
    return `My length is ${this.name}.`;
};
function S(name, age) {
    F.call(this, name);
    this.age = age;
}
Object.setPrototypeOf(S.prototype, F.prototype);
// Object.create()
S.prototype.constructor = S;
S.prototype.getAge = function() {
    return `My length is ${this.age}.`;
}

let s = new S("xcJxJx", 25);
console.info(s.getName());
console.info(s.getAge());