let randomNumberSpan = document.getElementById('randomNumber');
let generateRandomNumberButton = document.getElementById('generateRandomNumberButton');
let addToSumButton = document.getElementById('addToSumButton');
let sumList = document.getElementById('sumList');
let calculateSumButton = document.getElementById('calculateSumButton');
let sumSpan = document.getElementById('sum');

let randomNumber = 0;
let sum = 0;
let numbers = [];

function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumberSpan.textContent = randomNumber;
}

function addToSum() {
    numbers.push(randomNumber);
    let listItem = document.createElement('li');
    listItem.textContent = ` ${randomNumber}`;
    sumList.appendChild(listItem);
}

function calculateSum() {
    sum = numbers.reduce((a, b) => a + b, 0);
    sumSpan.textContent = sum;
}

generateRandomNumberButton.addEventListener('click', generateRandomNumber);
addToSumButton.addEventListener('click', addToSum);
calculateSumButton.addEventListener('click', calculateSum);