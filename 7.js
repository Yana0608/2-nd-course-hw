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
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Задание 8
console.log(new Date());

// Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня","Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

let greatDate = new Date();
let fullDate = "Дата: " + greatDate.getDate() + " " + months[greatDate.getMonth()] + " " + greatDate.getFullYear() + "- это " + days[greatDate.getDay()];

let hour = greatDate.getHours();
let minute = greatDate.getMinutes();
let second = greatDate.getSeconds();
let fullTime = "Время: " + hour + ":" + minute + ":" + second;

if (minute < 10) {
minute = "0" + minute;
}
if (second < 10) {
second = "0" + second;
}

console.log(fullDate);
console.log(fullTime);

// Задание 11
function fruits (){
    let rememberWords = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    rememberWords = rememberWords.sort(() => Math.random()- 0.5);
    alert(rememberWords);

    let firstEl = prompt("Чему равнялся первый элемент массива?");
    let lastEl = prompt("Чему равнялся последний элемент массива?");

    if (firstEl.toLowerCase() === rememberWords[0].toLowerCase() && lastEl.toLowerCase() === rememberWords[rememberWords.length - 1].toLowerCase() ){
        alert(" Поздравляю! Вы угадали оба слова! ");
    }
    else if (firstEl.toLowerCase() === rememberWords[0].toLowerCase() || lastEl.toLowerCase() === rememberWords[rememberWords.length - 1]. toLowerCase()) {
        alert(" Вы были близки к победе");
    }
    else {
        alert("Вы не угадали ни одного слова");
    }
}

