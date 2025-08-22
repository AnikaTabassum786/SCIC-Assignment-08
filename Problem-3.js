// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

function isPalindrome(string){
    const str = string.toLowerCase()
    console.log(str)

    const splitStr = str.split('')
    console.log(splitStr)

    const reversedStr = splitStr.reverse();
    console.log(reversedStr)

    const newStr = reversedStr.join('')
    console.log(newStr)

    return str === newStr
}

console.log(isPalindrome('madam'))
