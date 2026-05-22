// Интерфейс стратегии
interface ISortStrategy {
    sort(data: number[]): number[];
}

// стратегия сортировки пузырьком 
class BubbleSortStrategy implements ISortStrategy {
    sort(data: number[]): number[] {
        const arr = [...data];
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                }
            }
        }
        return arr;
    }
}

// быстрая сортировка 
class QuickSortStrategy implements ISortStrategy {
    sort(data: number[]): number[] {
        if (data.length <= 1) return [...data];
        const pivot = data[0];
        const left = data.slice(1).filter(x => x <= pivot);
        const right = data.slice(1).filter(x => x > pivot);
        return [...new QuickSortStrategy().sort(left), pivot, ...new QuickSortStrategy().sort(right)];
    }
}

// Контекст, использующий стратегию
class Sorter {
    private strategy: ISortStrategy;

    constructor(strategy: ISortStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: ISortStrategy): void {
        this.strategy = strategy;
    }

    sort(data: number[]): number[] {
        return this.strategy.sort(data);
    }
}

// Пример
const sorter = new Sorter(new BubbleSortStrategy());
console.log(sorter.sort([5, 2, 9, 1])); // [1,2,5,9]
sorter.setStrategy(new QuickSortStrategy());
console.log(sorter.sort([5, 2, 9, 1])); // [1,2,5,9]