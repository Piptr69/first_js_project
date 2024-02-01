const container = document.querySelector('#drawing-board');
for (let i = 0; i < 16; i++)
{
    let row = document.createElement('div');
    for (let j = 0; j < 16; j++)
    {
        let square = document.createElement('div');
        square.classList.add('square');
        square.textContent = 'test';
        row.appendChild(square);
    }
    container.appendChild(row);
}