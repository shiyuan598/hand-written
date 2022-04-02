// 节流是将连续高频操作降频
// 时间戳版
function throttle(fn, delay) {
    let start = Date.now();
    return function () {
        let now = Date.now();
        if (now - start >= delay) {
            fn.apply(null, arguments);
            start = Date.now();
        }
    };
}

function throttle2(fn, delay) {
    let timeout = null;
    return function run() {
        if (!timeout) {
            timeout = setTimeout(() => {
                fn.apply(null, arguments);
                clearTimeout(timeout);
                timeout = null;
            }, delay);
        }
    };
}
