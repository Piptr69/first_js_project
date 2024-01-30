let gridContainer = document.querySelector('#grid');
for (let i = 0; i < 16; i++)
{
    for (let j = 0; j < 16; j++)
    {
        let div = document.createElement("div");
        div.textContent = "test";
        gridContainer.appendChild(div);
    }
    
}