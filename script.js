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
}
drawBoard(16);

const squares = document.querySelectorAll('.square');

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