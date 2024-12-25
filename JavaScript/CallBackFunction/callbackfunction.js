
const calculate = (a,b,operation) => {
    return operation(a,b);
};


   // method 1
const additon = calculate(3,4, function(num1, num2){
return num1+num2;
});

console.log(additon);
//console.log(calculate)
 
// method 2
const subtraction = (a,b) => a-b;

const subResult = calculate(8,3,subtraction)  // passing function not calling

console.log(subResult)

// method 3
function multiply (a,b) {
    return a+b;
}

const mulresult = calculate(3,2,multiply);
console.log(mulresult)
