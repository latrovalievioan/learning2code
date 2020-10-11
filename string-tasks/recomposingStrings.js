function recompose(string) {
    let vowel = /a|e|i|o|u/i
    string.split(vowel.test(string))
}




console.log(recompose("KiKdaola"))