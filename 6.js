//Задание 1
const arr = [1, 5, 4, 10, 0, 3];
for ( let value of arr) {
    console.log(value);
    if (value === 10) {
        break;
    }
}

//Задание 2
const arr = [1, 5, 4, 10, 0, 3];
const input = arr.indexOf(4);
console.log(input);

//Задание 3
const input = [1, 3, 5, 10, 20];
const arr = input.join(' ');
console.log(arr);

//Задание 4
let arr = [];
for( let i = 0; i <3; i++) {
    let input = [];
    for (let j = 0; j < 3; j++) {
        input.push(1);
    }
    arr.push(input);
}
console.log(arr);

//Задание 5
const arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);

//Задание 6
let arr =[9, 8, 7, 'a', 6, 5];
arr.sort((a, b)=> a - b). pop();
console.log(arr);

//Задание 7
const arr = [9, 8, 7, 6, 5];
const guess = Number(prompt("Угадайте число:"), 10);
if (arr.includes(guess)) {
    alert("Угадал");
} else {
    alert("Не угадал")
}

//Задание 8
const arr = 'abcdef';
const input = arr.split('').reverse().join('');
console.log(input);

//Задание 9
const arr = [[1, 2, 3,],[4, 5, 6]];
const view = arr.flat();
console.log(view);

//Задание 10
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for ( let i =0; i <arr.length - 1; i++) {
    console.log(arr[i] + arr[i + 1]);
}

//Задание 11
function guess(arr) {
    return arr.map( num => num * num);
}

//Задание 12
function getLengthWords(words) {
    return words.map(word => word.length);
}

//Задание 13
function filterPositive(array) {
    let result = [];
    for ( let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            result.push(array[i]);
        }
    }
    return result;
    
}