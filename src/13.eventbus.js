class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    }

    emit(eventName, ...args) {
        const callbacks = this.events[eventName] || [];
        callbacks.forEach((callback) => {
            callback(...args);
        });
    }

    off(eventName, callback) {
        const callbacks = this.events[eventName] || [];
        const newCallbacks = callbacks.filter((cb) => cb !== callback);
        this.events[eventName] = newCallbacks;
    }
}

// 事件调度中心
let eventBus = new EventEmitter();

class F {
    constructor() {
        console.info("create by F.");
        // 订阅
        eventBus.on("success", () => {
            console.info("Hello, hello, hello! I'm in F.");
        });
    }
}

class S {
    constructor() {
        console.info("create by S.");
        // 订阅
        eventBus.on("success", () => {
            console.info("Ya, ya, ya! I'm in S.");
        });
    }
}

class E {
    constructor() {
        console.info("create by E.");
        // 订阅
        eventBus.on("error", () => {
            console.info("Wo, wo, wo! I'm in W.");
        });
    }
}

new F();
new S();
new E();

// 发布
new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
        resolve();
    }, 3000);
}).then(() => {
    eventBus.emit("success");
}).catch(() => {
    eventBus.emit("error");
});
