let number = 16;
function generateGrid(number)
{
    let gridContainer = document.querySelector('#grid');
for (let i = 0; i < number; i++)
{
    let rows = document.createElement("div");
    rows.classList.add("rows");
    for (let j = 0; j < number; j++)
    {
        let div = document.createElement("div");
        div.classList.add("square");
        rows.appendChild(div);
    }
    gridContainer.append(rows);
}
}
generateGrid(16);

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

const button = document.querySelector('#button');

button.addEventListener('click', () => {
    let newNumber = prompt('Type number of squares');
    generateGrid(newNumber);
});