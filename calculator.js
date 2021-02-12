let selectedNumber = [];
let firstNumber = 0
let secondNumber = 0
let operator = ''
    
//Number One
let oneButton = document.querySelector('#one');
oneButton.addEventListener('click', oneButtonFunc);
    
function oneButtonFunc() {
    selectedNumber.push(1);
    document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
};
//Number Two
let twoButton = document.querySelector('#two');
twoButton.addEventListener('click', twoButtonFunc);
    
function twoButtonFunc() {
    selectedNumber.push(2);
    document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
};
//Number Three
let threeButton = document.querySelector('#three');
threeButton.addEventListener('click', threeButtonFunc);
    
function threeButtonFunc() {
    selectedNumber.push(3);
    document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
};
//Number Four
let fourButton = document.querySelector('#four');
fourButton.addEventListener('click', fourButtonFunc);
     
function fourButtonFunc() {
    selectedNumber.push(4);
    document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
};
//Number Five
let fiveButton = document.querySelector('#five');
fiveButton.addEventListener('click', fiveButtonFunc);
      
function fiveButtonFunc() {
    selectedNumber.push(5);
    document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
};
//Number Six
let sixButton = document.querySelector('#six');
sixButton.addEventListener('click', sixButtonFunc);
        
function sixButtonFunc() {
    selectedNumber.push(6);
    document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
};
//Number Seven
let sevenButton = document.querySelector('#seven');
sevenButton.addEventListener('click', sevenButtonFunc);
        
function sevenButtonFunc() {
    selectedNumber.push(7);
    document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
};
//Number Eight
let eightButton = document.querySelector('#eight');
eightButton.addEventListener('click', eightButtonFunc);
         
function eightButtonFunc() {
    selectedNumber.push(8);
    document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
};
//Number Nine
let nineButton = document.querySelector('#nine');
nineButton.addEventListener('click', nineButtonFunc);
         
function nineButtonFunc() {
    selectedNumber.push(9);
    document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
};
//Number Zero
let zeroButton = document.querySelector('#zero');
zeroButton.addEventListener('click', zeroButtonFunc);
          
function zeroButtonFunc() {
    selectedNumber.push(0);
    document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
};
//Clear button
let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearButtonFunc);

function clearButtonFunc() {
    selectedNumber = [];
    document.querySelector('.calcDisplayDiv').innerHTML = '';
};
//Add button
let addButton = document.querySelector('#add');
addButton.addEventListener('click', addFunction);
       
function addFunction() {
    firstNumber = parseInt(selectedNumber.join(''));
    clearButtonFunc();
    operator = '+';
};
//Subtract button
let subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener('click', subtractFunction);
       
function subtractFunction() {
    firstNumber = parseInt(selectedNumber.join(''));
    clearButtonFunc();
    operator = '-';
};
//Multiply button
let multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', multiplyFunction);
        
function multiplyFunction() {
    firstNumber = parseInt(selectedNumber.join(''));
    clearButtonFunc();
    operator = '*';
};
//Divide button
let divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', divideFunction);
        
function divideFunction() {
    firstNumber = parseInt(selectedNumber.join(''));
    clearButtonFunc();
    operator = '/';
};
//Equals button
let equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', equalsFunction);

function equalsFunction() {
    secondNumber = parseInt(selectedNumber.join(''));
    clearButtonFunc();
    let answer = operators[operator](firstNumber, secondNumber);
    document.querySelector('.calcDisplayDiv').innerHTML = answer;
};

//Operators
let operators = {
    '+': function(a,b){return a + b},
    '-': function(a,b){return a - b},
    '*': function(a,b){return a * b},
    '/': function(a,b){return a / b},
};

//  function sum (array) {
//   return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
//  };
    
// function multiply (array) {
// return array.reduce((accumulator, currentValue) => accumulator * currentValue)
// };

//   function power (a, b) {
//       return (a ** b);
//   };
    
//   function factorial(a) {
//       if (a === 0 || a === 1) {
//           return 1;
//       }
//       else{
//       return (a * factorial(a - 1));
//       } 
//   };