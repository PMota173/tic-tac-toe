export default function board() {

    const table = document.querySelector('.game-table');

    function createBoard () {
        table.innerHTML = `
            <div class="square" data-="1"></div>
            <div class="square" data-="2"></div>
            <div class="square" data-="3"></div>
            <div class="square" data-="4"></div>
            <div class="square" data-="5"></div>
            <div class="square" data-="6"></div>
            <div class="square" data-="7"></div>
            <div class="square" data-="8"></div>
            <div class="square" data-="9"></div>
            `;
    }

    function deleteBoard () {
        table.innerHTML = '';
    }

    return {
        table,
        createBoard,
        deleteBoard,
    }
}
        
