    let a = 0
    let  b = 0
    let selectedNumber = 0

    function add (a, b) {
    return (a + b);	
    };
    
    function subtract (a, b) {
        return (a - b);
    };
    
    function sum (array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    };
    
    function multiply (array) {
    return array.reduce((accumulator, currentValue) => accumulator * currentValue)
    };

    function divide (a, b) {
        return (a / b);
    }
    
    function power(a, b) {
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
        let selectedNumber = 1
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber;
        console.log('1')
    }

    //Number Two
    let twoButton = document.querySelector('#two')
    twoButton.addEventListener('click', twoButtonFunc)
    
    function twoButtonFunc() {
        let selectedNumber = 2
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber;
        console.log('2')

    }
    //Number Three
    let threeButton = document.querySelector('#three')
    threeButton.addEventListener('click', threeButtonFunc)
    
    function threeButtonFunc() {
        let selectedNumber = 3
        document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber;
        console.log('3')

    }

     //Number Four
     let fourButton = document.querySelector('#four')
     fourButton.addEventListener('click', fourButtonFunc)
     
     function fourButtonFunc() {
         let selectedNumber = 4
         document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber;
         console.log('4')
 
     }

      //Number Five
      let fiveButton = document.querySelector('#five')
      fiveButton.addEventListener('click', fiveButtonFunc)
      
      function fiveButtonFunc() {
          let selectedNumber = 5
          document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber;
          console.log('5')
  
      }

        //Number Six
        let sixButton = document.querySelector('#six')
        sixButton.addEventListener('click', sixButtonFunc)
        
        function sixButtonFunc() {
            let selectedNumber = 6
            document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber;
            console.log('6')
    
        }
      
        //Number Seven
        let sevenButton = document.querySelector('#seven')
        sevenButton.addEventListener('click', sevenButtonFunc)
        
        function sevenButtonFunc() {
            let selectedNumber = 7
            document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber;
            console.log('7')
    
        }

        //Number Eight
        let eightButton = document.querySelector('#eight')
        eightButton.addEventListener('click', eightButtonFunc)
         
        function eightButtonFunc() {
            let selectedNumber = 8
            document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber;
            console.log('8')
     
         }

        //Number Nine
        let nineButton = document.querySelector('#nine')
        nineButton.addEventListener('click', nineButtonFunc)
         
        function nineButtonFunc() {
            let selectedNumber = 9
            document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber;
            console.log('9')
     
         }

        //Number Zero
        let zeroButton = document.querySelector('#zero')
        zeroButton.addEventListener('click', zeroButtonFunc)
          
        function zeroButtonFunc() {
            let selectedNumber = 0
            document.querySelector('.calcDisplayDiv').innerHTML = selectedNumber;
            console.log('0')
      
          } 
    
        //Clear button
        let clearButton = document.querySelector('#clear');
        clearButton.addEventListener('click', clearButtonFunc);

        function clearButtonFunc() {
            document.querySelector('.calcDisplayDiv').innerHTML = ''

        }

    // function operate(a, operator, b) {
    // a operator b   
    // };