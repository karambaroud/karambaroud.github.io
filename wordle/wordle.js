// Youtube video "Wordle in JavaScript in 20 minutes" by Double D was followed as a basis for this project
// Many changes and additions were made to the code to make it work with the project requirements
// https://www.youtube.com/watch?v=oKM2nQdQkIU

// async function getDictionary() {    // Get the dictionary from the API
//     document.getElementById("startOver").disabled = true;
//     document.getElementById("startOver").textContent = "Loading...";
//     try {
//         const res = await fetch("https://api.masoudkf.com/v1/wordle", {
//             headers: {
//             "x-api-key": "sw0Tr2othT1AyTQtNDUE06LqMckbTiKWaVYhuirv",
//             },
//         });
//         let data = await res.json();
//         const wordArray = await data["dictionary"];
//         return wordArray;
//     } catch (e) {
//         console.error(`Error: ${e}`);
//     }
// }

// dictionary of 4 letter words with hints
const words = [
    {"word": "abba", "hint": "A Swedish pop group"},
    {"word": "hint", "hint": "A clue"},
    {"word": "jazz", "hint": "A type of music"},
    {"word": "fish", "hint": "A creature that swims"},
    {"word": "cake", "hint": "A sweet dessert"},
    {"word": "book", "hint": "A source of knowledge"},
    {"word": "lamp", "hint": "A source of light"},
    {"word": "moon", "hint": "Earth's natural satellite"},
    {"word": "star", "hint": "A luminous celestial body"},
    {"word": "bird", "hint": "Feathered creature"},
    {"word": "tree", "hint": "A tall plant with a trunk"},
    {"word": "frog", "hint": "An amphibian"},
    {"word": "fire", "hint": "A source of heat and light"},
    {"word": "hero", "hint": "Someone admired for courage"},
    {"word": "love", "hint": "Deep affection"},
    {"word": "idea", "hint": "A thought or suggestion"},
    {"word": "star", "hint": "A luminous celestial body"},
    {"word": "wind", "hint": "Moving air"},
    {"word": "rain", "hint": "Water falling from the sky"},
    {"word": "snow", "hint": "Cold precipitation"},
    {"word": "time", "hint": "A measure of duration"},
    {"word": "dark", "hint": "Lacking light"},
    {"word": "cool", "hint": "Moderately cold"},
    {"word": "warm", "hint": "Slightly hot"},
    {"word": "milk", "hint": "White liquid from mammals"},
    {"word": "wine", "hint": "Alcoholic beverage"},
    {"word": "song", "hint": "A musical composition"},
    {"word": "road", "hint": "A paved way for vehicles"},
    {"word": "bath", "hint": "A place to wash"},
    {"word": "duck", "hint": "A waterbird"},
    {"word": "lion", "hint": "King of the jungle"},
    {"word": "bear", "hint": "Large mammal with fur"},
    {"word": "desk", "hint": "A piece of furniture for writing"},
    {"word": "rose", "hint": "A fragrant flower"},
    {"word": "gold", "hint": "A precious metal"},
    {"word": "door", "hint": "An entrance or exit"},
    {"word": "bell", "hint": "A ringing instrument"},
    {"word": "fire", "hint": "A source of heat and light"},
    {"word": "baby", "hint": "Young human"},
    {"word": "tiger", "hint": "Large feline"},
    {"word": "frog", "hint": "An amphibian"},
    {"word": "king", "hint": "A male monarch"},
    {"word": "game", "hint": "An activity for amusement"},
    {"word": "harp", "hint": "Musical instrument with strings"},
    {"word": "lamb", "hint": "Young sheep"},
    {"word": "moon", "hint": "Earth's natural satellite"}
]

function main() {
    const dictionary = words;
    if (dictionary) {
        document.getElementById("startOver").disabled = false;
        document.getElementById("startOver").textContent = "Start Over";
    }
    var state = {
        secret: getRandomWord(),
        grid: Array(4)
            .fill()
            .map(() => Array(4).fill('')),
        currentRow: 0,
        currentCol: 0,
        currentBox: null,
    }

    function getRandomWord() {
        return dictionary[Math.floor(Math.random() * dictionary.length)];
    }

    var isGameOver = false;
    var isVictory = false;

    state.currentBox = document.getElementById(`box${state.currentRow}${state.currentCol}`);
    var currentBoxColor = "black";
    state.currentBox.style.border = `2px solid ${currentBoxColor}`;

    var startOverButton = document.getElementById('startOver');
    startOverButton.addEventListener('click', () => {
        startOver();
        updateGrid();
    });

    var hintButton = document.getElementById('hint');
    hintButton.addEventListener('click', () => {
        hint();
    });

    var darkModeButton = document.getElementById('darkMode');
    darkModeButton.addEventListener('click', () => {
        darkMode();
    });

    var infoButton = document.getElementById('info');
    infoButton.addEventListener('click', () => {
        info();
    });

    function updateGrid() {
        for (let i = 0; i < state.grid.length; i++) {
            for (let j = 0; j < state.grid[i].length; j++) {
                const box = document.getElementById(`box${i}${j}`);
                box.textContent = state.grid[i][j];
            }
        }
    }

    // function CaptureKeyEvents() {      // Capture key events
    document.addEventListener('keyup', (e) => {
        
        if (isGameOver) return;
        const key = e.key;

        if(key === 'Enter') {
            if (state.currentCol === 4) {
                const word = getCurrentWord();
                checkWord(word);
                state.currentRow++;
                state.currentCol = 0;

                if(state.currentRow <= 3) {
                    state.currentBox = document.getElementById(`box${state.currentRow}${state.currentCol}`);
                    state.currentBox.style.border = `2px solid ${currentBoxColor}`;
                }

            } else {
                alert('You must complete the word first!');
            }
        }
        if(key === 'Backspace') {
            removeLetter();
        }
        if(isLetter(key)) {
            addLetter(key);
            // updateCurrentBox();
        }
        updateGrid();
    });
    // }

    function getCurrentWord() {    // Get the current word from the row
        return state.grid[state.currentRow].reduce((prev, curr) => prev + curr);
    }

    function checkWord(word) {     // Check each box and reveal the right letters
        const row = state.currentRow;

        for (let col = 0; col < 4; col++) {
            const box = document.getElementById(`box${row}${col}`);
            const letter = box.textContent.toUpperCase();

            if (letter === state.secret.word[col].toUpperCase()) {
                box.classList.add('right');
            } else if (state.secret.word.toUpperCase().includes(letter)) {
                box.classList.add('close');
            } else {
                box.classList.add('wrong');
            }
        }

        const isWinner = state.secret.word.toUpperCase() === word.toUpperCase();
        const isGameOver = state.currentRow === 3;

        if (isWinner) {
            winScreen();
        } else if (isGameOver) {
            GameOver();
        }
    }

    function isLetter(key) {    // Check if the key is a letter
        return key.length === 1 && key.match(/[a-z]/i);
    }

    function addLetter(letter) {  // Add a letter to the current box
        if (state.currentCol === 4) return;
        if (state.currentCol === 3) {
            state.grid[state.currentRow][state.currentCol] = letter;
            state.currentCol++;
            state.currentBox.style.border = '2px solid darkgray';
            return;
        }
        state.grid[state.currentRow][state.currentCol] = letter;
        state.currentCol++;
        state.currentBox.style.border = '2px solid darkgray';
        state.currentBox = document.getElementById(`box${state.currentRow}${state.currentCol}`);
        state.currentBox.style.border = `2px solid ${currentBoxColor}`;
        
    }

    function removeLetter() {       // Remove a letter from the current box
        if (state.currentCol === 0) return;
        state.grid[state.currentRow][state.currentCol - 1] = '';
        state.currentCol--;
        state.currentBox.style.border = '2px solid darkgray';
        state.currentBox = document.getElementById(`box${state.currentRow}${state.currentCol}`);
        state.currentBox.style.border = `2px solid ${currentBoxColor}`;

    }

    async function startOver() {        // Reset the game
        if(isVictory) {
            isVictory = false;
            infoButton.disabled = false;
            document.getElementById('startOver').classList.toggle('winScreen');
            document.getElementById('winScreen').style.display = 'none';
            document.getElementById('game').style.display = 'grid';
        }

        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                const box = document.getElementById(`box${row}${col}`);
                box.classList.remove('right');
                box.classList.remove('close');
                box.classList.remove('wrong');
            }
        }
        state.grid = Array(4)
            .fill()
            .map(() => Array(4).fill(''));
        state.currentRow = 0;
        state.currentCol = 0;
        state.currentBox.style.border = '2px solid darkgray';
        state.currentBox = document.getElementById(`box${0}${0}`);
        state.currentBox.style.border = `2px solid ${currentBoxColor}`;
        state.secret = await getRandomWord();
        console.log(state.secret);
        var shfFooter = document.getElementById('shfFooter');
        shfFooter.style.display = 'none';
        document.getElementById('game').style.height = 'calc(99vh - 90px)';

        isGameOver = false;
        hintButton.disabled = false;

    }

    function GameOver() {               // Puts game in Game Over state
        hintButton.disabled = true;
        var shfFooter = document.getElementById('shfFooter');
        shfFooter.removeAttribute('style');
        document.getElementById('game').style.height = 'calc(92vh - 90px)';
        shfFooter.style.display = 'flex';
        shfFooter.innerHTML = `You missed the word&nbsp;<b>${state.secret.word.toUpperCase()}</b>&nbsp;and lost!`;
        isGameOver = true;
    }
        
    function hint() {                // Toggle hint

        var shfFooter = document.getElementById('shfFooter');
        if (shfFooter.style.display !== 'flex') {
            document.getElementById('game').style.height = 'calc(92vh - 90px)';
            shfFooter.style.display = 'flex';
            shfFooter.style.backgroundColor = 'rgb(209, 188, 188)';
            shfFooter.style.color = 'black';
            shfFooter.innerHTML = `<i>Hint:</i>&nbsp${state.secret.hint}`;
        } else {
            shfFooter.style.display = 'none';
            document.getElementById('game').style.height = 'calc(99vh - 90px)';
        }
    }

    function darkMode() {       // Toggle dark mode
        for(let i = 0; i < 4; i++) {
            for(let j = 0; j < 4; j++) {
                const box = document.getElementById(`box${i}${j}`);
                box.classList.toggle("darkMode");
            }
        }
        currentBoxColor = currentBoxColor === 'black' ? 'white' : 'black';
        if (state.currentCol <= 3 && state.currentRow <= 3){
            state.currentBox.style.border = `2px solid ${currentBoxColor}`;
        } else if (state.currentCol <= 3){
            state.currentBox.style.border = '2px solid darkgray';
        }
        document.body.classList.toggle("darkMode");
        document.getElementById("footer").classList.toggle("darkMode");

        var headerButtons = document.getElementsByClassName("headerButtons");
        for (let i = 0; i < headerButtons.length; i++) {
            headerButtons[i].classList.toggle("darkMode");
        }

    }

    function info() {
        // if the info tab is already open, close it, otherwise open it
        var infoTab = document.getElementById("infoTab");
        if(infoTab.style.display === "block") {
            infoTab.style.display = "none";
        } else {
            infoTab.style.display = "block";
        }
    }

    function winScreen() {        // Puts game in Win state
        isGameOver = true;
        isVictory = true;
        document.getElementById("infoTab").style.display = "none";
        infoButton.disabled = true;
        hintButton.disabled = true;
        document.getElementById('game').style.display = 'none';
        document.getElementById('startOver').classList.toggle('winScreen');
        document.getElementById('winScreen').style.display = 'flex';

        var shfFooter = document.getElementById('shfFooter');
        shfFooter.removeAttribute('style');
        shfFooter.style.display = 'flex';
        shfFooter.style.backgroundColor = 'aliceblue';
        shfFooter.style.color = 'black';
        shfFooter.innerHTML = `You guessed the word&nbsp;<b>${state.secret.word.toUpperCase()}</b>&nbsp;correctly!`;
        isGameOver = true;
    }

    // CaptureKeyEvents();

}

main();

/*
Reference:
    "Wordle in JavaScript in 20 minutes." (2022, March 5). Double D. YouTube.
    https://www.youtube.com/watch?v=oKM2nQdQkIU
*/