// Псевдоним типа для экземпляра User
type TUser = {
    name: string;
    age: number;
    hello(): void;
};

// Тот же класс, но можно использовать тип для переменной
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    hello(): void {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    }
}

// Пример использования с псевдонимом
const user2: TUser = new User("Bob", 25);
user2.hello();