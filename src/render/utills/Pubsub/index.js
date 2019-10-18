//发布订阅事件主线，全局可用
class Pubsub {
  constructor() {
    this.topics = {};
    this.subUid = -1;
  }

  // 发布事件
  publish(topic, args) {
    if (!this.topics[topic]) return false;

    let subscribers = this.topics[topic];
    let len = subscribers ? subscribers.length : 0;

    while (len--) {
      subscribers[len].func(topic, args);
    }

    return this;
  }

  // 订阅事件
  subscribe(topic, func) {
    if (!this.topics[topic]) this.topics[topic] = [];

    let token = (++this.subUid).toString();
    this.topics[topic].push({
      token: token,
      func: func
    });

    return token;
  }

  // 取消订阅
  unsubscribe(token) {
    for (let m in topics) {
      if (topics[m]) {
        for (let i = 0; i < topics[m].length; i++) {
          if (topics[m][i].token == token) {
            topics[m].splice(i, 1);
            return token;
          }
        }
      }
    }
    return this;
  }
}

export default Pubsub;
