let gridContainer = document.querySelector('#grid');
function generateGrid(number)
{
    for (let i = 0; i < number; i++)
    {
        let rows = document.createElement("div");
        rows.classList.add("row");
        for (let j = 0; j < number; j++)
        {
            let div = document.createElement("div");
            div.classList.add("square");
            rows.appendChild(div);
        }
        gridContainer.append(rows);
    }
}
function lightSquares() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.setAttribute("style", "background-color:black;");
        });
    });
    
    squares.forEach((square) => {
        square.addEventListener('mouseout', () => {
            square.setAttribute("style", "background-color:white;");
        });
    });
}


function deleteGrid()
{
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        gridContainer.removeChild(row);
    });
}

const button = document.querySelector('#button');

button.addEventListener('click', () => {
    let newNumber = prompt('Type number of squares');
    deleteGrid();
    generateGrid(newNumber);
    lightSquares()
});

generateGrid(16);
lightSquares();