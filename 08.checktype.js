function checktype(obj) {
    let res = Object.prototype.toString.call(obj);
    return res.substring(8, res.length - 1);
}

let res = checktype([]);
console.info(res);