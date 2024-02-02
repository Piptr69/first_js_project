const container = document.querySelector('#drawing-board');
const squares = document.querySelectorAll('.square');

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
  
}
drawBoard(16);

function addTrail() {
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

addTrail();

function clearGrid()
{
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        container.removeChild(row);
    });
}

const button = document.querySelector('#SquareBtn');
button.addEventListener('click', () => {
    size = prompt('Enter size: ');
    clearGrid();
    drawBoard(size);
    addTrail();
});