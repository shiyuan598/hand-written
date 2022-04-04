// 对象内部有一个内部属性描述[[class]]，表示对象的类型信息，
// 这个值不会被改变，只能通过默认的toString方法访问

function checktype(obj) {
    let res = Object.prototype.toString.call(obj);
    return res.substring(8, res.length - 1);
}

let res = checktype(null);
console.info(res);

class Peanut {
    constructor() {
        this.gender = "Boy";
        this.age = 1;
    }
}

let p = new Peanut();
res = checktype(p);
console.info(res, typeof p);