// 异步任务调度，多个异步任务按序执行
let baseUrl = "https://jsonplaceholder.typicode.com/todos/";

function ajax(url) {
    return fetch(url).then((res) => res.json());
}

function solution1() {
    let promise = Promise.resolve();
    for (let i = 1; i <= 10; i++) {
        promise = promise.then(() => {
            return new Promise((resolve, reject) => {
                ajax(baseUrl + i).then((data) => {
                    console.info(data);
                    resolve();
                });
            });
        });
    }
}
// solution1();

function solution2() {
    let arr = [...new Array(10)].map((v, i) => baseUrl + (i + 11));
    arr.reduce((prev, cur) => {
        return prev.then(() => {
            return new Promise((resolve) => {
                ajax(cur).then((data) => {
                    console.info(data);
                    resolve();
                });
            });
        });
    }, Promise.resolve());
}
// solution2();

function solution3() {
    function* asyncQueue() {
        for (let index = 21; index <= 30; index++) {
            let data = yield ajax(baseUrl + index);
            console.info(data);
        }
    }

    function run(gen) {
        let it = gen();
        (function next(value) {
            let res = it.next(value);
            if (!res.done) {
                res.value.then((data) => {
                    next(data);
                });
            }
        })();
    }
    run(asyncQueue);
}
solution3();
