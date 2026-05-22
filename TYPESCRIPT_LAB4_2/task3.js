"use strict";
// Тот же класс, но можно использовать тип для переменной
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    }
}
// Пример использования с псевдонимом
const user2 = new User("Bob", 25);
user2.hello();
