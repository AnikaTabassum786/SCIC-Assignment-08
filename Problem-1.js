function reverseString(string){
 
    const array = string.split('');
    console.log(array)
    const reverseArray = array.reverse() 
    console.log(reverseArray)
    const joinArray = reverseArray.join('');
    return joinArray
    
}

console.log(reverseString("hello"))