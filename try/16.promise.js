// 简版: 不考虑异常处理
// promise三个状态,一经改变就凝固,能通过then链式操作
// 1.初始化时接收一个执行器函数,给该函数提供两个参数resolve,reject
// 2.调用resolve时promise状态变为fulfilled,调用reject时promise状态变为rejected
// 3.调用then方法能得到promise成功的value或失败的reason,then可以链式调用
class Promise2 {
    static PENDING = "pending";
    static FULFILLED = "fulfilled";
    static REJECTED = "rejected";
    constructor(executor) {
        this.value = null;
        this.callbacks = [];
        this.status = Promise2.PENDING;
        executor(this.resolve.bind(this), this.reject.bind(this));
    }

    resolve(value) {
        if (this.status === Promise2.PENDING) {
            this.status = Promise2.FULFILLED;
            this.value = value;
            setTimeout(() => {
                this.callbacks.forEach((callback) => {
                    callback.onFulfilled(this.value);
                });
            });
        }
    }

    reject(reason) {
        if (this.status === Promise2.PENDING) {
            this.status = Promise2.REJECTED;
            this.value = reason;
            setTimeout(() => {
                this.callbacks.forEach((callback) => {
                    callback.onRejected(this.value);
                });
            });
        }
    }

    then(onFulfilled, onRejected) {
        return new Promise2((resolve, reject) => {
            if (this.status === Promise2.FULFILLED) {
                setTimeout(() => {
                    let result = onFulfilled(this.value);
                    resolve(result);
                });
            }
            if (this.status === Promise2.REJECTED) {
                setTimeout(() => {
                    let result = onRejected(this.value);
                    resolve(result);
                });
            }
            if (this.status === Promise2.PENDING) {
                this.callbacks.push({
                    onFulfilled: () => {
                        let result = onFulfilled(this.value);
                        resolve(result);
                    },
                    onRejected: () => {
                        let result = onRejected(this.value);
                        resolve(result);
                    }
                });
            }
        });
    }

    static resolve(value) {
        return new Promise((resolve) => {
            if (value instanceof Promise2) {
                value.then(resolve, reject);
            } else {
                resolve(value);
            }
        });
    }
    static all(promises) {
        return new Promise2((resolve, reject) => {
            let result = [];
            let len = promises.length;
            promises.forEach((promise) => {
                promise.then(
                    (v) => {
                        result.push(v);
                        if (result.length === len) {
                            resolve(result);
                        }
                    },
                    (reason) => {
                        reject(reason);
                    }
                );
            });
        });
    }

    static race(promises) {
        return new Promise2((resolve, reject) => {
            promises.forEach((promise) => {
                promise.then(resolve, reject);
            });
        });
    }
}
let p = new Promise2((resolve, reject) => {
    resolve("1234");
    setTimeout(() => {
        reject(678);
    }, 2000);
    console.info("create"); // 第一输出
});
p.then(
    // 第三输出
    (v) => {
        console.info(`then value: ${v}.`);
    },
    (r) => {
        console.info(`then reason: ${r}.`);
    }
);

console.info(p); // 第二输出
