// 观察者模式
// 只有两个对象，目标对象Subject，观察者Observer
// 目标对象维护一个observerList,能添加观察者addObserver,发布事件通知notify
// 观察者自己实现一个update方法,在接收到事件通知时调用update方法
class Subject {
    constructor() {
        this.observerList = [];
    }
    addObserver(observer) {
        this.observerList.push(observer);
    }
    notify(msg) {
        console.info(msg);
        this.observerList.forEach((observer) => {
            observer.update();
        });
    }
}

class Observer {
    constructor(callback) {
        this.callback = callback;
    }
    update() {
        this.callback();
    }
}

const honestFirst = new Observer(() => {
    console.info("I'll always your good friend.");
});
const honestSecond = new Observer(() => {
    console.info("Wish you happiness.");
});
const honestThird = new Observer(() => {
    console.info("Bitch, go to die!");
});

const greenTea = new Subject();
greenTea.addObserver(honestFirst);
greenTea.addObserver(honestSecond);
greenTea.addObserver(honestThird);

new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve("I broke up.");
    } else {
        reject("I have met someone.");
    }
}).then(
    (msg) => {
        greenTea.notify(msg);
    },
    (err) => {
        greenTea.notify(err);
    }
);
