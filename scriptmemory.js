/*added js code*/
document.addEventListener("DOMContentLoaded", function() {
    const emojis = ["💖","💖","💀","💀","🐣","🐣","👀","👀","😈","😈","👀","👀","🦆","🦆","🍕","🍕"];
    const gameContainer = document.querySelector('.game');
    const resetButton = document.querySelector('.reset');
    let shufemojis = shuffle(emojis);

    resetButton.addEventListener('click', resetGame);

    function resetGame() {
        shufemojis = shuffle(emojis);
        gameContainer.innerHTML = '';
        createGameBoard();
    }

    function createGameBoard() {
        shufemojis.forEach(emoji => {
            const box = document.createElement('div');
            box.className = 'item';
            box.innerHTML = emoji;
            box.addEventListener('click', handleClick);
            gameContainer.appendChild(box);
        });
    }

    function handleClick() {
        this.classList.add('boxOpen');
        setTimeout(checkMatch, 500);
    }

    function checkMatch() {
        const openBoxes = document.querySelectorAll('.boxOpen');
        if (openBoxes.length === 2) {
            const [firstBox, secondBox] = openBoxes;
            if (firstBox.innerHTML === secondBox.innerHTML) {
                firstBox.classList.add('boxMatch');
                secondBox.classList.add('boxMatch');
                firstBox.classList.remove('boxOpen');
                secondBox.classList.remove('boxOpen');
                if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                    alert('You win!');
                }
            } else {
                openBoxes.forEach(box => box.classList.remove('boxOpen'));
            }
        }
    }

    function shuffle(array) {
        const shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    createGameBoard();
});



