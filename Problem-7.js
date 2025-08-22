// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

// Example:

// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

function findEvenNumbers(array){
    let numbers = []

    let i=0
    for ( i = 0; i<array.length; i++){
        if(array[i] % 2 ===0){
            numbers.push(array[i])
        }
    }
    return numbers
}

console.log(findEvenNumbers([1,2,3,4,5,6]))