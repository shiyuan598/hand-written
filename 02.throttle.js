// 节流，连续调用，只在指定的时间间隔内调用调用一次，减低频率即节流

function throttle(func, wait) {
    let start = Date.now();
    return function() {
        let now = Date.now();
        if (now - start >= wait) {
            func.apply(null, arguments);
            start = now;
        }
    }
}

// // 示例
// window.onmousemove = throttle(handleMouseMove, 1000);