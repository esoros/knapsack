"use strict";
function knapsack(maxWeight, currentProfit, items) {
    if (maxWeight == 0 || items.length == 0) {
        return currentProfit;
    }
    let tail = items.filter((_, index) => index != 0);
    if (items[0].weigth <= maxWeight) {
        let include = knapsack(maxWeight - items[0].weigth, currentProfit + items[0].profit, tail);
        let exclude = knapsack(maxWeight, currentProfit, tail);
        return Math.max(include, exclude);
    }
    else {
        return knapsack(maxWeight, currentProfit, tail);
    }
}
let maxWeight = 10;
let items = [
    { weigth: 4, profit: 1 },
    { weigth: 5, profit: 2 },
    { weigth: 1, profit: 3 },
    { weigth: 2, profit: 1 },
    { weigth: 2, profit: 2 },
    { weigth: 7, profit: 80 }
];
console.log(knapsack(maxWeight, 0, items));
