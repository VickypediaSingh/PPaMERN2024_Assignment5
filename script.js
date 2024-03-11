let secretWord = generateRandomWord();
let guessCount = 0;

function generateRandomWord() {
    const words = ["WORLD", "HELLO", "APPLE", "BEACH", "TIGER", "JOKER", "PIZZA", "QUEEN", "CHAIR", "TABLE"];
    return words[Math.floor(Math.random() * words.length)];
}

function checkGuess() {
    const guess = document.getElementById("guess").value.toUpperCase();
    if (guess.length !== 5) {
        alert("Please enter a 5-letter word.");
        return;
    }
    if (!/^[A-Z]+$/.test(guess)) {
        alert("Please enter only letters.");
        return;
    }

    guessCount++;
    let feedback = "";
    for (let i = 0; i < 5; i++) {
        const letter = guess[i];
        if (letter === secretWord[i]) {
            feedback += "<span class='green'></span>";
        } else if (secretWord.includes(letter)) {
            feedback += "<span class='yellow'></span>";
        } else {
            feedback += "<span class='gray'></span>";
        }
    }
    document.getElementById("feedback1").innerHTML = feedback[0];
    document.getElementById("feedback2").innerHTML = feedback[1];
    document.getElementById("feedback3").innerHTML = feedback[2];
    document.getElementById("feedback4").innerHTML = feedback[3];
    document.getElementById("feedback5").innerHTML = feedback[4];

    if (guess === secretWord) {
        document.getElementById("result").innerHTML = `Congratulations! You guessed the word "${secretWord}" in ${guessCount} attempts.`;
    } else if (guessCount === 6) {
        document.getElementById("result").innerHTML = `Sorry, you ran out of guesses. The word was "${secretWord}".`;
    }
}
document.getElementById("secret-word").textContent = secretWord;
