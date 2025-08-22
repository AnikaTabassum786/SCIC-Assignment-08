// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.

// Example:

// Input: [1, 2, 3, 4]
// Output: 10

function sum(array){

    console.log(array.length)
    let totalSum = 0;

    let i=0;
    
    for(i=0; i<array.length;i++){
        totalSum = totalSum+array[i]
    }

    return totalSum;

}

console.log(sum([1,2,3,4]))