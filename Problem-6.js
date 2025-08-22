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