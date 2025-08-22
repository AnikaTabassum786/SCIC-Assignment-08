// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

// Example:

// Input: 5
// Output: 120

function factorial(number){

    let result = 1
    let i = 1

    for(i=1; i<=number; i++){
      result = result*i
    }
    return result
}
console.log(factorial(5))