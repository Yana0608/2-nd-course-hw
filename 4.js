//Задание 1
for (let i = 0; i < 2; i++) {
    console.log("Привет");
}

//Задание 2
for (let i = 1; i <= 5; i++) {
    console.log(i);;
}


//Задание 3
for (let i = 22; i <= 77; i++) {
    console.log(i);
    
}

//Задание 4
let obg ={
    "Коля": "200",
    "Вася": "300",
    "Петя": "400",
};

for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]}долларов`);
}

//Задание 5
let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}
console.log(n);
console.log(num);

//Задание 6
let firstfriday =5;
for (let i = firstfriday; i <= 31; i+7){
    console.log(`Сегодня пятница, $(i- е число. Не обходимо подготовить отчет)`);
}
