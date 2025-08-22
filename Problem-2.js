function countVowel(string){
    let count = 0;

    const str = string.toLowerCase();
    let i=0

    for (i=0; i<str.length; i++){
         if(
            str[i] == 'a'|| str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] =='u'
         )
         {
            count++
         }
         
    }
    return count
}

console.log(countVowel("programming"))