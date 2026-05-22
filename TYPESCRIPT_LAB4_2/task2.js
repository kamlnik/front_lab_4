"use strict";
// Сам класс
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
// Использование
const user1 = new User("Alice", 30);
user1.hello();
