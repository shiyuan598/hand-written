class Promise2 {
    static PENDING = "pending";
    static FULFILLED = "fulfilled";
    static REJECTED = "rejected";
    constructor(executor) {
        this.status = Promise2.PENDING;
        this.value = null;
        this.callbacks = [];
        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
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
        if (typeof onFulfilled !== "function") {
            onFulfilled = () => this.value;
        }
        if (typeof onRejected !== "function") {
            onRejected = () => this.value;
        }
        return new Promise2((resolve, reject) => {
            if (this.status === Promise2.PENDING) {
                this.callbacks.push({
                    onFulfilled: (value) => {
                        this.parse(onFulfilled(value), resolve, reject);
                    },
                    onRejected: (reason) => {
                        this.parse(onRejected(reason), resolve, reject);
                    }
                });
            }
            if (this.status === Promise2.FULFILLED) {
                setTimeout(() => {
                    this.parse(onFulfilled(this.value), resolve, reject);
                });
            }
            if (this.status === Promise2.REJECTED) {
                setTimeout(() => {
                    this.parse(onRejected(this.value), resolve, reject);
                });
            }
        });
    }

    parse(result, resolve, reject) {
        try {
            if (result instanceof Promise2) {
                result.then(resolve, reject);
            } else {
                resolve(result);
            }
        } catch (error) {
            reject(error);
        }
    }

    static resolve(value) {
        return new Promise2((resolve, reject) => {
            if (value instanceof Promise2) {
                value.then(resolve, reject);
            } else {
                resolve(value);
            }
        });
    }

    static all(promises) {
        return new Promise2((resolve, reject) => {
            let results = [];
            promises.forEach((promise) => {
                promise.then(
                    (value) => {
                        results.push(value);
                        if (results.length === promises.length) {
                            resolve(results);
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
