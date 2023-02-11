//задание 1

let strJs = 'js';
console.log(strJs.toUpperCase());

//задание 2

function arrPassedParameters(arr, str) {
    let newArray = [];
    arr.forEach((word) => {
        if (word.toLowerCase().startsWith(str.toLowerCase())) {
            newArray.push(word);
        }
    });
    return newArray;
}
console.log(arrPassedParameters(['дом', 'семья', 'дача', 'дочь', 'сын', 'мама', 'папа', 'дорога'], 'до'));

//задание 3

let meaning = 32.58884;
console.log(Math.floor(meaning));
console.log(Math.ceil(meaning));
console.log(Math.round(meaning));

//задание 4

let arr4 = [52, 53, 49, 77, 21, 32];
let valueMax = Math.max.apply(null, arr4);
console.log(valueMax);
let valueMin = Math.min.apply(null, arr4);
console.log(valueMin);

//задание 5

function randomNum(max, min) {
    return Math.round(Math.random() * (max - min)) + min;
};
console.log(randomNum(10, 1));

//задание 6

let arrRandomNum = (maxValue) => {
    let arr4 = [];
    for (let i = 0; i < Math.round(maxValue / 2); i++) {
        arr4.push(Math.round(Math.random() * maxValue));
    };
    return arr4
}
console.log(arrRandomNum(15));

//задание 7

let arr7 = [10, 5];
let valueNum1 = Math.max.apply(null, arr7);
let valueNum2 = Math.min.apply(null, arr7);

let randomNum7 = (valueNum1, valueNum2) => {
    return Math.round(Math.random() * (valueNum1 - valueNum2)) + valueNum2;
}
console.log(randomNum7(valueNum1, valueNum2));

//задание 8

let myDate = new Date();
console.log(myDate);

//задание 9

let currentDate = new Date();
let dateAfter74 = new Date(currentDate.setDate(currentDate.getDate() + 74));
console.log(dateAfter74);

//задание 10

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
myDate = new Date();
function needDate(myDate) {
    let currentDate = 'Дата: ' + myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + ' ' + '-' + ' ' + 'это' + ' ' + days[myDate.getDay()];
    let hour = myDate.getHours();
    let minute = myDate.getMinutes();
    let second = myDate.getSeconds();
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }
    let currentTime = 'Время: ' + hour + ':' + minute + ':' + second;
    let dayTime = currentDate + '.' + ' ' + currentTime;
    return dayTime;
}

console.log(needDate(myDate));






