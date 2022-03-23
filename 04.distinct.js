// 数组去重
// 1.可以使用[...new Set(arr)]
// es5中利用filter
function distinct(arr) {
    return arr.filter((v, i, array) => {
        return array.indexOf(v) === i; // 在数组中查找一个元素，得到的索引是该元素在数组中的索引时返回，说明此前没有找到该元素
    })
}

let arr = distinct([1,2,3,4,5,5,5,6,7,7,8,9]);
console.info(arr);