// 观察者模式只有两个主体，目标对象（Subject）和观察者（Observer）
// 目标对象维护一个observerList，能添加observer，根据情况通知所有observer执行update
// 与发布订阅模式相比，少了事件调度中心
class Subject {
    constructor() {
        this.observerList = [];
    }
    addObserver(observer) {
        this.observerList.push(observer);
    }
    notify(msg) {
        console.info(msg);
        this.observerList.forEach((observer) => observer.update());
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

// 示例
// 一个清纯的绿茶（Subject）和几个老实人(Observer)的故事，绿茶记下（addObserver）几个老实人的联系方式，
// 当又换对象或分手时通知（notify）联系方式中的所有老实人（observerList），老实人有自己独特的反应（update）。
// 不过话说回来正经姑娘至少会用个单身拯救平台（订阅发布模式中的EventEmitter）吧。
let honest1 = new Observer(() => {
    console.info("We are still good friends.");
});

let honest2 = new Observer(() => {
    console.info("Wish you happiness.");
});

let honest3 = new Observer(() => {
    console.info("Bitch, go to die!");
});

let greenTea = new Subject();
greenTea.addObserver(honest1);
greenTea.addObserver(honest2);
greenTea.addObserver(honest3);

new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() * 10 > 5) {
            resolve();
        } else {
            reject();
        }
    }, 3000);
}).then(
    () => {
        greenTea.notify("I broke up.");
    },
    () => {
        greenTea.notify("I have met someone.");
    }
);
