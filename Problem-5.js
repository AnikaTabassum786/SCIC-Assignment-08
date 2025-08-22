// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:

// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

function removeDuplicate(array){

    const single = [];
    let i

    for( i = 0; i<array.length; i++){
        if(!single.includes(array[i])){
            single.push(array[i])
        }
    }
    return single
}

console.log(removeDuplicate([1,2,2,3,4,4]))