import board from "./board.js";


export default function game() {

    let player1Name = 'Player 1';
    let player2Name = 'Player 2';
    
    function startGame() {
        // creates the board 
        // and adds event listeners to the squares

        board().createBoard();
        
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.addEventListener('click', () => {
                square.innerHTML = 'O';
            });
        });

    }

    function resetGame() {
        // removes event listeners from the squares
        // deletes the board
        // and starts a new game

        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.removeEventListener('click', () => {
                console.log('clicked');
            });
        });

        board().deleteBoard();
        startGame();
        console.log('reset');
    }

    function newGame() {
        // deletes the board
        // and starts a new game

        board().deleteBoard();
        startGame();
        console.log('new game');
    }

    const resetButton = document.querySelector('.reset');

    resetButton.addEventListener('click', () => {
        game().resetGame();
    });

    const newGameButton = document.querySelector('.new-game');

    newGameButton.addEventListener('click', () => {
        game().newGame();
    });

    const changeNamesButton = document.querySelector('.setup-name');
    const playersTurn = document.querySelector('.player-turn');


    changeNamesButton.addEventListener('click', () => {
        player1Name = document.querySelector('.player1');
        player2Name = document.querySelector('.player2');

        const name1 = prompt('Enter player 1 name');
        const name2 = prompt('Enter player 2 name');

        
        player1Name.innerHTML = name1 + ':';
        player2Name.innerHTML = name2 + ':';
    });



    return {
        startGame,
        resetGame,
        newGame,
    }

}