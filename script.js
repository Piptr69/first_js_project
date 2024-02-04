const container = document.querySelector('#drawing-board');

function drawBoard(size) {
    for (let i = 0; i < size; i++)
    {
        const row = document.createElement('div');
        row.classList.add('row');        
        for (let j = 0; j < size; j++)
        {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        container.appendChild(row);
    }
    let squares = document.querySelectorAll('.square');
    addTrail(squares);
}

function addTrail(squares) {
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.setAttribute('style','background-color:black;');
        });
    });
    
    squares.forEach(square => {
        square.addEventListener('mouseout', () => {
            square.setAttribute('style','background-color:white;');
        });
    });
}

function clearGrid()
{
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        container.removeChild(row);
    });
}

const button = document.querySelector('#SquareBtn');
button.addEventListener('click', () => {
    do {
        size = prompt('Enter size: ');
    } while(size > 64);
    clearGrid();
    drawBoard(size);
});

drawBoard(16);