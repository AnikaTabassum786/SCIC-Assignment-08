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