function largestNumber(array) {

    console.log(array.length) //4

    let largestNum = array[0] //5
    let i = 1
    for (i = 1; i < array.length; i++) {
        if (array[i] > largestNum) {
            largestNum = array[i];
        }
    };

    return largestNum;
}

console.log(largestNumber([5,1,9,3]))
