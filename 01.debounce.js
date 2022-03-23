// 防抖，连续调用，只在指定的时间间隔内不再调用时才执行一次，如moveend
function debounce(func, wait) {
    let timeout;
    return function() {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            func.apply(null, arguments)
        }, wait);
    }
}
// // 示例
// window.onmousemove = debounce(handleMouseMove, 1000);