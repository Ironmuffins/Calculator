//Global Variable Declarations
let selectedNumber = [];
let firstNumber = 0;
let secondNumber = 0;
let answer = 0;
let operator = '';   
//Number One
let oneButton = document.querySelector('#one');
oneButton.addEventListener('click', oneButtonFunc);
function oneButtonFunc() {
    if (selectedNumber[0] === 0) {
        selectedNumber.shift();
        selectedNumber.push(1);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
    else if (selectedNumber.length <15) {
    selectedNumber.push(1);
    document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
};
//Number Two
let twoButton = document.querySelector('#two');
twoButton.addEventListener('click', twoButtonFunc);
function twoButtonFunc() {
    if (selectedNumber[0] === 0) {
        selectedNumber.shift();
        selectedNumber.push(2);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
    else if (selectedNumber.length <15) {
        selectedNumber.push(2);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
};
//Number Three
let threeButton = document.querySelector('#three');
threeButton.addEventListener('click', threeButtonFunc);
function threeButtonFunc() {
    if (selectedNumber[0] === 0) {
        selectedNumber.shift();
        selectedNumber.push(3);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
    else if (selectedNumber.length <15) {
        selectedNumber.push(3);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
};
//Number Four
let fourButton = document.querySelector('#four');
fourButton.addEventListener('click', fourButtonFunc);
function fourButtonFunc() {
    if (selectedNumber[0] === 0) {
        selectedNumber.shift();
        selectedNumber.push(4);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
    else if (selectedNumber.length <15) {
        selectedNumber.push(4);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
};
//Number Five
let fiveButton = document.querySelector('#five');
fiveButton.addEventListener('click', fiveButtonFunc);
function fiveButtonFunc() {
    if (selectedNumber[0] === 0) {
        selectedNumber.shift();
        selectedNumber.push(5);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
    else if (selectedNumber.length <15) {
        selectedNumber.push(5);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
};
//Number Six
let sixButton = document.querySelector('#six');
sixButton.addEventListener('click', sixButtonFunc);
function sixButtonFunc() {
    if (selectedNumber[0] === 0) {
        selectedNumber.shift();
        selectedNumber.push(6);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
    else if (selectedNumber.length <15) {
        selectedNumber.push(6);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
};
//Number Seven
let sevenButton = document.querySelector('#seven');
sevenButton.addEventListener('click', sevenButtonFunc);
function sevenButtonFunc() {
    if (selectedNumber[0] === 0) {
        selectedNumber.shift();
        selectedNumber.push(7);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
    else if (selectedNumber.length <15) {
        selectedNumber.push(7);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
};
//Number Eight
let eightButton = document.querySelector('#eight');
eightButton.addEventListener('click', eightButtonFunc);
function eightButtonFunc() {
    if (selectedNumber[0] === 0) {
        selectedNumber.shift();
        selectedNumber.push(8);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
    else if (selectedNumber.length <15) {
        selectedNumber.push(8);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
};
//Number Nine
let nineButton = document.querySelector('#nine');
nineButton.addEventListener('click', nineButtonFunc);
function nineButtonFunc() {
    if (selectedNumber[0] === 0) {
        selectedNumber.shift();
        selectedNumber.push(9);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
    else if (selectedNumber.length <15) {
        selectedNumber.push(9);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
};
//Number Zero
let zeroButton = document.querySelector('#zero');
zeroButton.addEventListener('click', zeroButtonFunc);
function zeroButtonFunc() {
    if (!(selectedNumber[0] === 0) && selectedNumber.length <15){
        selectedNumber.push(0);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
};
//Decimal button
let decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', decimalFunc)
function decimalFunc() {

    if (selectedNumber.length <15 && !(selectedNumber.includes('.'))) {
        selectedNumber.push('.');
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
    }
}
//Clear button
let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearButtonFunc);
function clearButtonFunc() {
    selectedNumber = [];
    firstNumber = 0;
    secondNumber = 0;
    answer = 0;
    document.querySelector('.calcDisplayDiv').innerHTML = '';
};
//Add button
let addButton = document.querySelector('#add');
addButton.addEventListener('click', addFunction);
function addFunction() {
    if (answer) {
        firstNumber = answer;
        document.querySelector('.calcDisplayDiv').innerHTML = +firstNumber.toFixed(13);
        answer = 0;
        operator = '+';
    }
    else if (firstNumber) {
        if (selectedNumber.length >= 1){
            secondNumber = parseFloat(selectedNumber.join('')); 
        }   
        if ((secondNumber === 0) && (operator == '/')) {
            document.querySelector('.calcDisplayDiv').innerHTML = 'Ow, my brain!';
        } else if (selectedNumber.length == 0){
        } else {
            selectedNumber = [];
            answer = operators[operator](firstNumber, secondNumber);
            document.querySelector('.calcDisplayDiv').innerHTML = +answer.toFixed(13);
            firstNumber = answer;
            answer = 0;
            secondNumber = 0;
            operator = '+';
            }
    }
    else {
    firstNumber = parseFloat(selectedNumber.join(''));
    selectedNumber = [];
    operator = '+';
    }
};
//Subtract button
let subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener('click', subtractFunction);
function subtractFunction() {
    if (answer) {
        firstNumber = answer;
        document.querySelector('.calcDisplayDiv').innerHTML = +firstNumber.toFixed(13);
        answer = 0;
        operator = '-';
    }
    else if (firstNumber) {
        if (selectedNumber.length >= 1){
            secondNumber = parseFloat(selectedNumber.join('')); 
        }   
        if ((secondNumber === 0) && (operator == '/')) {
            document.querySelector('.calcDisplayDiv').innerHTML = 'Ow, my brain!';
        } else if (selectedNumber.length == 0){
        } else {
            selectedNumber = [];
            answer = operators[operator](firstNumber, secondNumber);
            document.querySelector('.calcDisplayDiv').innerHTML = +answer.toFixed(13);
            firstNumber = answer;
            answer = 0;
            secondNumber = 0;
            operator = '-';
            }
    }
    else {
    firstNumber = parseFloat(selectedNumber.join(''));
    selectedNumber = [];
    operator = '-';
    }    
};
//Multiply button
let multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', multiplyFunction);
function multiplyFunction() {
    if (answer) {
        firstNumber = answer;
        document.querySelector('.calcDisplayDiv').innerHTML = +firstNumber.toFixed(13);
        answer = 0;
        operator = '*';
    }
    else if (firstNumber) {
        if (selectedNumber.length >= 1){
            secondNumber = parseFloat(selectedNumber.join('')); 
        }   
        if ((secondNumber === 0) && (operator == '/')) {
            document.querySelector('.calcDisplayDiv').innerHTML = 'Ow, my brain!';
        } else if (selectedNumber.length == 0){
        } else {
            selectedNumber = [];
            answer = operators[operator](firstNumber, secondNumber);
            document.querySelector('.calcDisplayDiv').innerHTML = +answer.toFixed(13);
            firstNumber = answer;
            answer = 0;
            secondNumber = 0;
            operator = '*';
            }
    }
    else {
    firstNumber = parseFloat(selectedNumber.join(''));
    selectedNumber = [];
    operator = '*';
    }
};
//Divide button
let divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', divideFunction);
function divideFunction() {
    if (answer) {
        firstNumber = answer;
        document.querySelector('.calcDisplayDiv').innerHTML = +firstNumber.toFixed(13);
        answer = 0;
        operator = '/';
    }
    else if (firstNumber) {
        if (selectedNumber.length >= 1){
            secondNumber = parseFloat(selectedNumber.join('')); 
        }   
        if ((secondNumber === 0) && (operator == '/')) {
            document.querySelector('.calcDisplayDiv').innerHTML = 'Ow, my brain!';
        } else if (selectedNumber.length == 0){
        } else {
            selectedNumber = [];
            answer = operators[operator](firstNumber, secondNumber);
            document.querySelector('.calcDisplayDiv').innerHTML = +answer.toFixed(13);
            firstNumber = answer;
            answer = 0;
            secondNumber = 0;
            operator = '/';
            }
    }
    else {
    firstNumber = parseFloat(selectedNumber.join(''));
    selectedNumber = [];
    operator = '/';
    }
};
//Exponent button
let exponentButton = document.querySelector('#exponent');
exponentButton.addEventListener('click', exponentFunc);
function exponentFunc() {
    firstNumber = parseInt(selectedNumber.join(''));
    selectedNumber = [];
    operator = '**';
};
//Equals button
let equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', equalsFunction);
function equalsFunction() {
    if (answer) {
        firstNumber = answer;
        document.querySelector('.calcDisplayDiv').innerHTML = +firstNumber.toFixed(13);
        answer = 0;
    }
    else if (firstNumber) {
        secondNumber = parseFloat(selectedNumber.join(''));
        if ((secondNumber === 0) && (operator == '/')) {
            document.querySelector('.calcDisplayDiv').innerHTML = 'Ow, my brain!';
        }
        else {
        answer = operators[operator](firstNumber, secondNumber);
        document.querySelector('.calcDisplayDiv').innerHTML = +answer.toFixed(13);
        selectedNumber = [];
        firstNumber = 0;
        secondNumber = 0;
        }
    }
};
//Operators
let operators = {
    '+': function(a,b){return a + b},
    '-': function(a,b){return a - b},
    '*': function(a,b){return a * b},
    '/': function(a,b){return a / b},
    '**': function(a,b){return a ** b},      
};
    
//   function factorial(a) {
//       if (a === 0 || a === 1) {
//           return 1;
//       }
//       else{
//       return (a * factorial(a - 1));
//       } 
//   };

//Factorial Button
//let factorialButton = document.querySelector('#factorial');
//factorialButton.addEventListener('click', factorialFunc);

//function factorialFunc() {
//    firstNumber = parseInt(selectedNumber.join(''));
//    selectedNumber = [];
//    operator = '!';
//}