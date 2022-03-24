// 组合继承

function F(name) {
    this.name = name;
}

F.prototype.showName = function() {
    console.info(`My name is ${this.name}.`);
}

let f = new F("A");
f.showName();

function S(name, age) {
    F.call(this, name);
    this.age = age;
}

S.prototype = Object.create(F.prototype);
S.prototype.constructor = S;

S.prototype.showAge = function () {
    console.info(`My age is ${this.age}.`);
}

let s = new S("S", 3);
s.showName();
s.showAge();