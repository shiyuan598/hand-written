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
            onFulfilled = () => {};
        }
        if (typeof onRejected !== "function") {
            onRejected = () => {};
        }
        return new Promise2((resolve, reject) => {
            if (this.status === Promise2.PENDING) {
                this.callbacks.push({
                    onFulfilled: (value) => {
                        try {
                            let result = onFulfilled(value);
                            resolve(result);
                        } catch (error) {
                            onRejected(error);
                        }
                    },
                    onRejected: (reason) => {
                        try {
                            let result = onRejected(reason);
                            resolve(result);
                        } catch (error) {
                            onRejected(error);
                        }
                    }
                });
            }
            if (this.status === Promise2.FULFILLED) {
                setTimeout(() => {
                    try {
                        let result = onFulfilled(this.value);
                        resolve(result);
                    } catch (error) {
                        onRejected(error);
                    }
                });
            }
            if (this.status === Promise2.REJECTED) {
                setTimeout(() => {
                    try {
                        let result = onRejected(this.value);
                        resolve(result);
                    } catch (error) {
                        onRejected(error);
                    }
                });
            }
        });
    }
}
