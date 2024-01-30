let gridContainer = document.querySelector('#grid');
for (let i = 0; i < 16; i++)
{
    let rows = document.createElement("div");
    rows.classList.add("rows");
    for (let j = 0; j < 16; j++)
    {
        let div = document.createElement("div");
        div.textContent = "test";
        rows.appendChild(div);
    }
    gridContainer.append(rows);
}