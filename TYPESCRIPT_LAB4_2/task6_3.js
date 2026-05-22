"use strict";
// конкретный субъект
class NewsPublisher {
    observers = [];
    attach(observer) {
        this.observers.push(observer);
    }
    detach(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1)
            this.observers.splice(index, 1);
    }
    notify(data) {
        for (const observer of this.observers) {
            observer.update(data);
        }
    }
    publishNews(news) {
        console.log(`Publishing news: ${news}`);
        this.notify(news);
    }
}
// Конкретные наблюдатели
class EmailSubscriber {
    update(data) {
        console.log(`EmailSubscriber received: ${data}`);
    }
}
class SmsSubscriber {
    update(data) {
        console.log(`SmsSubscriber received: ${data}`);
    }
}
// использование
const publisher = new NewsPublisher();
const emailSub = new EmailSubscriber();
const smsSub = new SmsSubscriber();
publisher.attach(emailSub);
publisher.attach(smsSub);
publisher.publishNews("New game released!");
// Вывод:
// Publishing news: New game released!
// EmailSubscriber received: New game released!
// SmsSubscriber received: New game released!
publisher.detach(emailSub);
publisher.publishNews("Observer pattern works");
// SmsSubscriber received: Observer pattern works
