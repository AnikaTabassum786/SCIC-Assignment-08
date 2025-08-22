// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:

// Input: "hello world"
// Output: "Hello World"

function capitalize(string){
    const splitStr = string.split(' ')
    console.log(splitStr)

    const capitalized = splitStr.map(word=>{
         return word.charAt(0).toUpperCase() + word.slice(1);
    })

    const capitalizedWord = capitalized.join(' ')

    return capitalizedWord
}
console.log(capitalize("hello world"))