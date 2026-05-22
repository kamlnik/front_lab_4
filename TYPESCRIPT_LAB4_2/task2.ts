// интерфейс
interface IUser {
    name: string;
    age: number;
    hello(): void;
}

// Сам класс
class User implements IUser {
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

// Использование
//const user1: IUser = new User("Alice", 30);
//user1.hello();