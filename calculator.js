    let a = 0
    let  b = 0
    let selectedNumber = [];
    let firstNumber = 0
    let secondNumber = 0

    function add (a, b) {
    return (a + b);	
    };
    
    function subtract (a, b) {
        return (a - b);
    };
    
    function sum (array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    };
    
    function multiply (a, b) {
        return (a * b);
    }
   // function multiply (array) {
   // return array.reduce((accumulator, currentValue) => accumulator * currentValue)
   // };

    function divide (a, b) {
        return (a / b);
    }
    
    function power (a, b) {
        return (a ** b);
    };
    
    function factorial(a) {
        if (a === 0 || a === 1) {
            return 1;
        }
        else{
        return (a * factorial(a - 1));
        } 
    };
    
    //Number One
    let oneButton = document.querySelector('#one')
    oneButton.addEventListener('click', oneButtonFunc)
    
    function oneButtonFunc() {
        selectedNumber.push(1);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
        console.log('1')
    }

    //Number Two
    let twoButton = document.querySelector('#two')
    twoButton.addEventListener('click', twoButtonFunc)
    
    function twoButtonFunc() {
        selectedNumber.push(2);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
        console.log('2')

    }
    //Number Three
    let threeButton = document.querySelector('#three')
    threeButton.addEventListener('click', threeButtonFunc)
    
    function threeButtonFunc() {
        selectedNumber.push(3);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
        console.log('3')

    }

     //Number Four
     let fourButton = document.querySelector('#four')
     fourButton.addEventListener('click', fourButtonFunc)
     
     function fourButtonFunc() {
        selectedNumber.push(4);
         document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
         console.log('4')
 
     }

      //Number Five
      let fiveButton = document.querySelector('#five')
      fiveButton.addEventListener('click', fiveButtonFunc)
      
      function fiveButtonFunc() {
        selectedNumber.push(5);
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
        console.log('5')
  
      }

        //Number Six
        let sixButton = document.querySelector('#six')
        sixButton.addEventListener('click', sixButtonFunc)
        
        function sixButtonFunc() {
            selectedNumber.push(6);
            document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
            console.log('6')
    
        }
      
        //Number Seven
        let sevenButton = document.querySelector('#seven')
        sevenButton.addEventListener('click', sevenButtonFunc)
        
        function sevenButtonFunc() {
            selectedNumber.push(7);
            document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
            console.log('7')
    
        }

        //Number Eight
        let eightButton = document.querySelector('#eight')
        eightButton.addEventListener('click', eightButtonFunc)
         
        function eightButtonFunc() {
            selectedNumber.push(8);
            document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
            console.log('8')
     
         }

        //Number Nine
        let nineButton = document.querySelector('#nine')
        nineButton.addEventListener('click', nineButtonFunc)
         
        function nineButtonFunc() {
            selectedNumber.push(9);
            document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
            console.log('9')
     
         }

        //Number Zero
        let zeroButton = document.querySelector('#zero')
        zeroButton.addEventListener('click', zeroButtonFunc)
          
        function zeroButtonFunc() {
            selectedNumber.push(0);
            document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber.join('');
            console.log('0')

          } 
    
        //Clear button
        let clearButton = document.querySelector('#clear');
        clearButton.addEventListener('click', clearButtonFunc);

        function clearButtonFunc() {
            selectedNumber = []
            document.querySelector('.calcDisplayDiv').innerHTML = ''
        }

        //Add button
        let addButton = document.querySelector('#add');
        addButton.addEventListener('click', addFunction)

        function addFunction() {
            firstNumber = parseInt(selectedNumber.join(''));
            console.log(firstNumber);
            clearButtonFunc();
            console.log(selectedNumber);
            console.log(operator);
        }

        //Equals button
        let equalsButton = document.querySelector('#equals');
        equalsButton.addEventListener('click', equalsFunction)

        function equalsFunction() {
            secondNumber = parseInt(selectedNumber.join(''));
            console.log(secondNumber);
            clearButtonFunc();
            //operate();
            let answer = add(firstNumber, secondNumber)
            console.log(answer);
            document.querySelector('.calcDisplayDiv').innerHTML = answer;

        }

     //operate function   
     function operate() {
     operator;
     console.log(operator);
     };

     function operator() {};