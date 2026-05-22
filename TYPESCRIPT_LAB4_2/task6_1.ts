//  интерфейс
interface ILogger {
    log(message: string): void;
}

// Сторонняя библиотека с другим интерфейсом
class ExternalLogger {
    write(msg: string): void {
        console.log(`[External] ${msg}`);
    }
}

// Адаптер, то есть паттерн который приводит ExternalLogger к ILogger
class LoggerAdapter implements ILogger {
    private external: ExternalLogger;

    constructor(external: ExternalLogger) {
        this.external = external;
    }

    log(message: string): void {
        this.external.write(message);
    }
}

// Пример 
const test_ext = new ExternalLogger();
const adapter: ILogger = new LoggerAdapter(test_ext);
adapter.log("Adapter works!"); // [External] Adapter works!