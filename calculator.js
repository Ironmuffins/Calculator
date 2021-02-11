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
    
    // function operate(a, operator, b) {
    // a operator b   
    // };