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
