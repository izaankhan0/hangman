let word = '';
let letterHolder = [];  // Declare letterHolder in the outer scope
let looseCounter = 0;
let arr9 = []

function insertPress() {
    getWord();
    document.querySelector('.letters').classList.add('stage-2')
    document.querySelector('.ans').classList.remove('stage-1')

}

function insertLetter() {
    enterLetter();
}

let hitEnter1 = document.querySelector('.inp-1');
    hitEnter1.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            insertPress();
        }
    });
    let hitEnter2 = document.querySelector('.inp-2');
    hitEnter2.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            insertLetter();
        }
    });

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
    word = document.querySelector('.inp-1').value.toLowerCase();
    // console.log(word);
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
    let char = document.querySelector('.inp-2').value.toLowerCase();

    if (char.length === 1) {
        // console.log(char.length);
        for (let k = 0; k < word.length; k++) {
            if (char === word[k]) {
                flag1 = true;
                // console.log(k)
                let dashArray = document.querySelectorAll('.dash')
                // console.log(dashArray)
                dashArray[k].classList.add('letterSpace')
                dashArray[k].innerHTML = char.toUpperCase()
                // console.log(dashArray.length)
                // console.log(letterHolder.length)

                let fullDec = document.querySelectorAll('.letterSpace')
                if (fullDec.length === letterHolder.length){
                    document.querySelector('.screen').classList.add('win')
                    document.querySelector('.win').innerHTML += `<p>The Word was: " ${word.toUpperCase()} "</p><h3>You have Won :D <br> Congrats!</h3>`
                }
                
                
            }
        }
    } else {
        // console.log(char.length);
        alert('Only Enter One letter smartash');
        // document.querySelector('.result').innerHTML = "";
        document.querySelector('.inp-2').value = '';
        document.querySelector('.result').innerHTML = `<h2>Enter a Letter</h2><p class="result-p result-p-green">Wrong Letters:  ${looseCounter}/6</p>`;
        return;
    }

    if (flag1) {
        document.querySelector('.result').innerHTML = `<h2 class='present'>The Letter "${char.toUpperCase()}" is Present :)</h2> <p class="result-p result-p-green">Wrong Letters:  ${looseCounter}/6</p>`;
    } else {
        looseCounter++
        document.querySelector('.diagram').innerHTML = `<img src="./images/${looseCounter}.png" alt="hangman image">`
        document.querySelector('.result').innerHTML = `<h2 class='absent'>The Letter "${char.toUpperCase()}" is Absent :(</h2><p class="result-p result-p-green">Wrong Letters:  ${looseCounter}/6</p>`;
        // console.log("loose counter is:")
        // console.log(looseCounter)
        if (looseCounter === 6){
            document.querySelector('.screen').classList.add('loss')
                    document.querySelector('.loss').innerHTML += `<p>The Word was: " ${word.toUpperCase()} "</p><h3 class="absent">You have Lost! thats sad</h3>`
        }

        arr9.push(char)
        console.log(arr9)
        console.log(looseCounter -1)
        console.log(arr9[looseCounter -1])
        let currentWrongChar = arr9[looseCounter -1]
        console.log(currentWrongChar)
        document.querySelector('.table-row').innerHTML
        += `<td>${currentWrongChar}</td>`
    }
    document.querySelector('.inp-2').value = ''

    const resultP = document.querySelector('.result-p');
    
        if (looseCounter === 3 || looseCounter === 4) {
            resultP.className = 'result-p result-p-org';
        } else if (looseCounter > 4) {
            resultP.className = 'result-p result-p-red';
        } else {
            resultP.className = 'result-p result-p-green';
        }
}
