import board from "./board.js";


export default function game() {

    let player1Name = 'Player 1';
    let player2Name = 'Player 2';

    let name1 = player1Name;
    let name2 = player2Name;

    const player1score = document.querySelector('.scorePlayer1');
    const player2score = document.querySelector('.scorePlayer2');

    player1score.innerHTML = '0';
    player2score.innerHTML = '0';
    
    function startGame() {
        // creates the board 
        // and adds event listeners to the squares
        
        board().createBoard();
        let matrixGame = board().createGameMatrix();
        
        const squares = document.querySelectorAll('.square');

        squares.forEach(square => {
            square.addEventListener('click', () => {
                if (square.innerHTML === '') {
                    if (playersTurn.innerHTML === name1 + '\'s turn') {
                        square.innerHTML = 'X';
                        square.classList.add('red-placed');
                        matrixGame[square.dataset.row][square.dataset.column] = 'X';
                    } else {
                        square.innerHTML = 'O';
                        square.classList.add('blue-placed');
                        matrixGame[square.dataset.row][square.dataset.column] = 'O';
                    }
                    changeTurn(name1,name2,squares);
                    const winner = checkWinner(matrixGame);

                    if (winner) {
                        alert(winner + ' wins!');
                        if (winner === 'X') {
                            player1score.innerHTML = parseInt(player1score.innerHTML) + 1;
                            playersTurn.innerHTML = name2 + '\'s turn';
                        } else {
                            player2score.innerHTML = parseInt(player2score.innerHTML) + 1;
                            playersTurn.innerHTML = name1 + '\'s turn';
                        }
                    }
                }
            });
        });
    }

    function checkWinner(matrixGame) {
        // checks if there is a winner
        // returns the winner or false

        for (let i = 0; i < 3; i++) {
            if (matrixGame[i][0] === matrixGame[i][1] && matrixGame[i][1] === matrixGame[i][2] && matrixGame[i][0] !== '') {
                return matrixGame[i][0];
            }
        }

        for (let i = 0; i < 3; i++) {
            if (matrixGame[0][i] === matrixGame[1][i] && matrixGame[1][i] === matrixGame[2][i] && matrixGame[0][i] !== '') {
                return matrixGame[0][i];
            }
        }

        if (matrixGame[0][0] === matrixGame[1][1] && matrixGame[1][1] === matrixGame[2][2] && matrixGame[0][0] !== '') {
            return matrixGame[0][0];
        }

        if (matrixGame[0][2] === matrixGame[1][1] && matrixGame[1][1] === matrixGame[2][0] && matrixGame[0][2] !== '') {
            return matrixGame[0][2];
        }

        return false;
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

        name1 = prompt('Enter player 1 name');
        name2 = prompt('Enter player 2 name');

        updateTurn(name1,name2);
        
        player1Name.innerHTML = name1 + ':';
        player2Name.innerHTML = name2 + ':';


    });

    function changeTurn(player1Name,player2Name, squares) {
        // changes the player's turn
        // and updates the player's turn message

        if (playersTurn.innerHTML === player1Name + '\'s turn') {
            playersTurn.innerHTML = player2Name + '\'s turn';

            squares.forEach(square => {
                square.classList.remove('red')
                square.classList.add('blue')
            });
        } else {
            playersTurn.innerHTML = player1Name + '\'s turn';
            squares.forEach(square => {
                square.classList.remove('blue')
                square.classList.add('red')
            });
        }
    }

    function updateTurn(player1Name,player2Name) {
        // updates the player's turn message
        if (playersTurn.innerHTML === player1Name + '\'s turn') {
            playersTurn.innerHTML = player1Name + '\'s turn';
        } else {
            playersTurn.innerHTML = player2Name + '\'s turn';
        }
    }


    return {
        startGame,
        resetGame,
        newGame,
    }

}