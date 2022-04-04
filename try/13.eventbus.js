// 发布订阅模式
// 有三个对象，事件调度中心EventChannel，发布者Publisher，订阅者Subscriber
// 事件调度中心维护一个事件列表，提供发布事件，订阅及取消订阅的功能
// 发布者通过事件中心发布事件，订阅者通过事件中心订阅事件，并添加相应的处理函数
class EventChannel {
    constructor() {
        this.events = [];
    }
    emit(eventName, ...args) {
        let events = this.events[eventName] || [];
        events.forEach((event) => {
            event(...args);
        });
    }

    on(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    }

    off(eventName, callback) {
        this.events[eventName] = this.events[eventName].filter(
            callback !== callback
        );
    }
}
