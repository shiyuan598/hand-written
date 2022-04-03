// 数组去重，可以使用[...new Set(arr)]

function distinct(arr) {
    return arr.filter((v, i, array) => {
        // 在数组中依次查询每个值的索引，如果得到的索引和值的次序一致，说明此前没有该值
        return array.indexOf(v) === i;
    });
}