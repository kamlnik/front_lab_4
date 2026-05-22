"use strict";
// Сторонняя библиотека с другим интерфейсом
class ExternalLogger {
    write(msg) {
        console.log(`[External] ${msg}`);
    }
}
// Адаптер, то есть паттерн который приводит ExternalLogger к ILogger
class LoggerAdapter {
    external;
    constructor(external) {
        this.external = external;
    }
    log(message) {
        this.external.write(message);
    }
}
// Пример 
const test_ext = new ExternalLogger();
const adapter = new LoggerAdapter(test_ext);
adapter.log("Adapter works!"); // [External] Adapter works!
