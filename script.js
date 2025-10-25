const grid = document.querySelector(".grid");
const resizeButton = document.querySelector(".resize-button");
const resetButton = document.querySelector(".reset-button");

let size = 16;

function createGrid(size) {
    for (let i = 0; i < size; ++i) {
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        for (let j = 0; j < size; ++j) {
            const whiteSquare = document.createElement("p");
            whiteSquare.classList.add("grid-square");
            rowContainer.appendChild(whiteSquare);
        }
        grid.appendChild(rowContainer);
    }
}

function clearGrid() {
    Array.from(grid.children).forEach(row => row.parentNode.removeChild(row));
}

grid.addEventListener("mouseover", e => {
    if (e.target.classList.contains("grid-square")) {
        if (e.target.style.backgroundColor == "") {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    }
})

resizeButton.addEventListener("click", () => {
    size = prompt("How many squares per side?");
    if (size !== null && size.length > 0 && !isNaN(size)) {
        clearGrid();
        createGrid(size);
    }
})

resetButton.addEventListener("click", () => {
    clearGrid();
    createGrid(size);
})

createGrid(size);