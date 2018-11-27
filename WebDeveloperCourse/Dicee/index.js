function randomDiceValue() {
    var randomNumber = Math.random() * 6;
    randomNumber = Math.floor(randomNumber + 1);
    return randomNumber;
}

function changeDicesImage() {
    var valueFirstDice = randomDiceValue();
    var valueSecondDice = randomDiceValue();
    document.getElementsByClassName("img1")[0].setAttribute("src", "images\\dice" + valueFirstDice + ".png");
    document.getElementsByClassName("img2")[0].setAttribute("src", "images\\dice" + valueSecondDice + ".png");

    if (valueFirstDice > valueSecondDice) {
        document.querySelector("h1").textContent = "🚩 Player 1 Wins";
    } else if (valueFirstDice < valueSecondDice) {
        document.querySelector("h1").textContent = "Player 2 Wins 🚩";
    } else {
        document.querySelector("h1").textContent = "Draw!";
    }
}

changeDicesImage();
