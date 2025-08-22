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