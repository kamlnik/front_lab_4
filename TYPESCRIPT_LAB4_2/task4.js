"use strict";
// Реализация
function distance(a, b, c, d) {
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number' && typeof d === 'number') {
        // Координатный вариант
        const dx = a - c;
        const dy = b - d;
        return Math.sqrt(dx * dx + dy * dy);
    }
    else if (typeof a === 'object' && typeof b === 'object') {
        // Вариант с точками
        const p1 = a;
        const p2 = b;
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    throw new Error("Invalid arguments");
}
// Примеры вызова
console.log(distance(0, 0, 3, 4)); // 5
console.log(distance({ x: 3, y: 3 }, { x: 3, y: 4 })); // 1
