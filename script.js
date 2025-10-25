const container = document.querySelector(".container");

for (let i = 0; i < 16; ++i) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");
    for (let j = 0; j < 16; ++j) {
        const square = document.createElement("p");
        square.classList.add("grid-square");
        rowContainer.appendChild(square);
    }
    container.appendChild(rowContainer);
}