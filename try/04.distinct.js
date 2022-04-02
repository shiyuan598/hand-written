// 数组去重，可以使用[...new Set(arr)]

function distinct(arr) {
    return arr.filter((v, i, array) => {
        return array.indexOf(v) === i;
    });
}
