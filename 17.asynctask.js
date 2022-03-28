let baseUrl = "https://jsonplaceholder.typicode.com/todos/";

function ajax(url) {
    return fetch(url).then((res) => res.json());
}
function* generator() {
    for (let i = 1; i < 100; i++) {
        let data = yield ajax(baseUrl + i);
        console.info(data);
    }
}

function run(generator) {
    let it = generator();
    function next(res) {
        if (!res.done) {
            res.value.then((data) => {
                res = it.next(data);
                next(res);
            });
        }
    }
    next(it.next());
}
run(generator);
