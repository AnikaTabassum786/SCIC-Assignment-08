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