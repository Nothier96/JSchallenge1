function add(number1 , number2){
    return console.log(`${number1} + ${number2} = ${number1 + number2}`) ; 
}
function multiply(number1 , number2){
    return console.log(`${number1} * ${number2} = ${number1 * number2}`) ; 
}
function substract(number1 , number2){
    return console.log(`${number1} - ${number2} = ${number1 - number2}`) ; 
}
function divide(number1 , number2){
    return console.log(`${number1} / ${number2} = ${number1 / number2}`) ; 
}

const number1 = Number(prompt("Please enter the first number"));
const operation = prompt("Enter the operation"); 
const number2 = Number(prompt("Please enter the second number"));
if (operation === '+' || operation === 'addition') {
    add(number1 , number2);
}
if (operation === '-' || operation === 'substract') {
    substract(number1 , number2);
}

if (operation === '/' || operation === 'divide') {
    divide(number1 , number2);
}

if (operation === '*' || operation === 'multiply') {
    multiply(number1 , number2);
}


