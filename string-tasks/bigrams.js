function canFind(bigrams, words) {
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < bigrams.length; j){
            const regex = RegExp(bigrams[j],'i')
            if(regex.test(words[i])){
                bigrams.splice(j,1)
            }else{
                j++}
        }
    }
    return bigrams.length === 0
}
console.log(canFind(["la", "te"], ["latte"]))