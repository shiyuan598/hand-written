// 01浅拷贝,只拷贝第一层属性，可以使用Object.asign、扩展运算符...

// 02深拷贝，复制后的新对象指向另一个内存地址，两个对象不互相影响
// 简单可以使用JSON.parse(JSON.Stringfy(obj)),无法处理函数、正则
function deepClone(source) {
    if (source === null) {
        return source;
    }
    let target = Array.isArray(source) ? [] : {};
    for (const key in source) {
        if (Object.hasOwnProperty.call(source, key)) {
            if (source.hasOwnProperty(key)) {
                const value = source[key];
                target[key] =
                    typeof value === "object" ? deepClone(value) : value;
            }
        }
    }
    return target;
}

let obj = {
    name: "hello",
    age: 3,
    hobby: ["sleep"]
};

let target = deepClone(obj);

obj.age = 5;
obj.hobby.push("apple");

target.age = 6;
target.hobby.push("banana");
console.info(obj, target);