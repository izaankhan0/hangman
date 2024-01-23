let word = ''

function insertPress(){
    getWord()
}

function getWord(){
    let word = document.querySelector('.inp-1').value
    console.log(word)
    document.querySelector('.inp-1').value = ''
    let letterHolder = [];
    for (let i = 0; i < word.length; i++) {
        letterHolder.push(word[i]);
        console.log(word[i]);
        console.log(letterHolder)
    }
}
