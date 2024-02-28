// Задание 1
let str = "js"
str = str.toUpperCase();
console.log(str);

// Задание 2
function acceptString(array, str) {
    return array
        .filter(item => item.toLowerCase().starstWith(str.toLowerCase()));
}

// Задание 3
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

// Задание 4
let numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

// Задание 5
function random() {
    console.log(math.floor(Math.random() * 10) + 1);
}

// Задание 6
function randomNumb(n) {
    let result = [];
    for (let i = 0; i < n / 2; i++) {
        result.push(Math.floor(Math.random() * n));

    }
    return result;
}

// Задание 7
function randomBetween(min, max) {
    return Math.floor( Math.random() * (max - min + 1)+ min)
}

// Задание 8
console.log(new Date());

// Задание 9

// Задание 10

