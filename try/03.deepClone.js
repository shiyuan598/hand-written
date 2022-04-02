// 浅拷贝：只拷贝第一层属性，可以使用扩展运算符，Object.assign

// 深拷贝是两个不同的地址简单有JSON.parse(JSON.Stringfy(obj))
// 无法处理函数、正则
// 所以使用递归处理
function deepClone(source) {
    let target = Array.isArray(source) ? [] : {};
    for (const key in source) {
        if (Object.hasOwnProperty.call(source, key)) {
            let value = source[key];
            target[key] = typeof value !== "object" ? value : deepClone(value);
        }
    }
    return target;
}

let a = {
    name: "peanut",
    age: "1",
    hobby: {
        name: "sleep",
        hai() {
            console.info("My name is " + this.name);
        }
    }
};
let b = deepClone(a);
a.hobby.name = "dadbdb";
console.info(a, b);
