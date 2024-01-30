let gridContainer = document.querySelector('#grid');
for (let i = 0; i < 16; i++)
{
    let rows = document.createElement("div");
    rows.classList.add("rows");
    for (let j = 0; j < 16; j++)
    {
        let div = document.createElement("div");
        div.classList.add("square");
        rows.appendChild(div);
    }
    gridContainer.append(rows);
}

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