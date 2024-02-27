//Задание 1
const numb = [1, 5, 4, 10, 0, 3];
for ( let value of numb) {
    console.log(value);
    if (value === 10) {
        break;
    }
}

//Задание 2
const numbs = [1, 5, 4, 10, 0, 3];
const input = numbs.indexOf(4);
console.log(input);

//Задание 3
const numbers = [1, 3, 5, 10, 20];
const result = input.join(' ');
console.log(result);


//Задание 4
let user = [];
for( let i = 0; i <3; i++) {
    let input = [];
    for (let j = 0; j < 3; j++) {
        input.push(1);
    }
    user.push(input);
}
console.log(arr);

//Задание 5
const end = [1, 1, 1];
end.push(2, 2, 2);
console.log(end);

//Задание 6
let num =[9, 8, 7, 'a', 6, 5];
num.sort((a, b)=> a - b). pop();
console.log(num);

//Задание 7
const arr = [9, 8, 7, 6, 5];
const guess = Number(prompt("Угадайте число:"), 10);
if (arr.includes(guess)) {
    alert("Угадал");
} else {
    alert("Не угадал")
}

//Задание 8
const string = 'abcdef';
const reversedString = string.split('').reverse().join('');
console.log(reversedString);

//Задание 9
const numbArr = [[1, 2, 3,],[4, 5, 6]];
const view = numbArr.flat();
console.log(view);

//Задание 10
const nubersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for ( let i =0; i <nubersArr.length - 1; i++) {
    console.log(nubersArr[i] + nubersArr[i + 1]);
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
    const negativeValues = array.filter((value) => value < 0);
    return negativeValues;

}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));