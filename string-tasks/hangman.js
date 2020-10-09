function hangman(phrase, arr) {
    let result = '';
    const regex = RegExp(arr.join('|') + '| ', 'si');
    const regexAlphabetical = /^[A-Z]+$/i;
    for(let i = 0; i < phrase.length; i++){
        result += ((regex.test(phrase[i]) && arr.length > 0) 
        || !regexAlphabetical.test(phrase[i]))
        ? 
        phrase[i] : '-';
    }
    return result;
}



console.log(hangman("Looney Tunes", ["a", "e", "i", "o", "u"]))