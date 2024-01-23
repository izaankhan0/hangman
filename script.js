let word = '';
let letterHolder = [];  // Declare letterHolder in the outer scope
let looseCounter = 0;

function insertPress() {
    getWord();
}

function insertLetter() {
    console.log("hi");
    enterLetter();
}
function playAgain() {
    setInterval(function() {
        document.querySelector('.screen').classList.remove('win');
    }, 1000);
    
    setInterval(function() {
        document.querySelector('.screen').classList.remove('loss');
    }, 1000);

    setTimeout(function() {
        // Reload the website after 1200 milliseconds
        location.reload();
    }, 1200);
}


function getWord() {
    document.querySelector('.dashes').innerHTML = "";
    word = document.querySelector('.inp-1').value;
    console.log(word);
    document.querySelector('.inp-1').value = '';

    letterHolder = [];  // Reset letterHolder

    for (let i = 0; i < word.length; i++) {
        letterHolder.push(word[i]);
        // console.log(word[i]);
        // console.log(letterHolder);
    }

    addDashes();
}

function addDashes() {
    for (let j = 0; j < letterHolder.length; j++) {
        document.querySelector('.dashes').innerHTML += "<div class='dash'></div>";
    }
}

function enterLetter() {
    document.querySelector('.result').innerHTML = "";
    let flag1 = false;
    let char = document.querySelector('.inp-2').value;

    if (char.length === 1) {
        // console.log(char.length);
        for (let k = 0; k < word.length; k++) {
            if (char === word[k]) {
                flag1 = true;
                console.log(k)
                let dashArray = document.querySelectorAll('.dash')
                console.log(dashArray)
                dashArray[k].classList.add('letterSpace')
                dashArray[k].innerHTML = char.toUpperCase()
                console.log(dashArray.length)
                console.log(letterHolder.length)

                let fullDec = document.querySelectorAll('.letterSpace')
                if (fullDec.length === letterHolder.length){
                    document.querySelector('.screen').classList.add('win')
                    document.querySelector('.win').innerHTML += `<p>The Word was: " ${word} "</p><h3>You have Won! Congrats!</h3>`
                }
                
                
            }
        }
    } else {
        console.log(char.length);
        alert('Only Enter One letter smartash');
        document.querySelector('.result').innerHTML = "";
        document.querySelector('.inp-2').value = '';
        return;
    }

    if (flag1) {
        document.querySelector('.result').innerHTML = "<h2 class='present'>Present</h2>";
    } else {
        document.querySelector('.result').innerHTML = "<h2 class='absent'>Absent</h2>";
        looseCounter++
        console.log("loose counter is:")
        console.log(looseCounter)
        if (looseCounter === 6){
            document.querySelector('.screen').classList.add('loss')
                    document.querySelector('.loss').innerHTML += `<p>The Word was: " ${word} "</p><h3>You have Lost! thats sad</h3>`
        }

    }
}
