// 防抖是将连续的高频操作优化为最后一次操作
// 事件触发时不直接执行处理函数，设定一个计时器，
// 事件在短时间内再次触发时就重新开始计时，直到超时后才执行一次
function debounce(fn, wait) {
    let timeout = null;
    return function () {
        if(timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            fn.apply(null, arguments);
        }, wait);
    }
}
