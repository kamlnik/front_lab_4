// интерфейс наблюдателя
interface IObserver {
    update(data: string): void;
}

// интерфейс того за кем будет наблюдение 
interface ISubject {
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(data: string): void;
}

// конкретный субъект
class NewsPublisher implements ISubject {
    private observers: IObserver[] = [];

    attach(observer: IObserver): void {
        this.observers.push(observer);
    }

    detach(observer: IObserver): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) this.observers.splice(index, 1);
    }

    notify(data: string): void {
        for (const observer of this.observers) {
            observer.update(data);
        }
    }

    publishNews(news: string): void {
        console.log(`Publishing news: ${news}`);
        this.notify(news);
    }
}

// Конкретные наблюдатели
class EmailSubscriber implements IObserver {
    update(data: string): void {
        console.log(`EmailSubscriber received: ${data}`);
    }
}

class SmsSubscriber implements IObserver {
    update(data: string): void {
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