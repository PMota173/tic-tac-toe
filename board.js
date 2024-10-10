export default function board() {

    const table = document.querySelector('.game-table');

    function createBoard () {
        table.innerHTML = `
            <div class="square red" data-row="0" data-column="0"></div>
            <div class="square red" data-row="0" data-column="1"></div>
            <div class="square red" data-row="0" data-column="2"></div>
            <div class="square red" data-row="1" data-column="0"></div>
            <div class="square red" data-row="1" data-column="1"></div>
            <div class="square red" data-row="1" data-column="2"></div>
            <div class="square red" data-row="2" data-column="0"></div>
            <div class="square red" data-row="2" data-column="1"></div>
            <div class="square red" data-row="2" data-column="2"></div>
            `;
    }
    
    function createGameMatrix() {
        // creates a 3x3 matrix for the game

        const matrix = [];
        for (let i = 0; i < 3; i++) {
            matrix[i] = [];
            for (let j = 0; j < 3; j++) {
                matrix[i][j] = '';
            }
        }
        return matrix;
    }

    function deleteBoard () {
        table.innerHTML = '';
    }

    return {
        table,
        createBoard,
        deleteBoard,
        createGameMatrix
    }
}
        
