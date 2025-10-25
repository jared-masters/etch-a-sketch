const page = document.querySelector("body");
const grid = document.querySelector(".grid");
const resizeButton = document.querySelector(".resize-button");
const resetButton = document.querySelector(".reset-button");
const UIContainer = document.querySelector(".ui-container");

let size = 16;
let isMouseDown = false;

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

function draw(e) {
    if (e.target.classList.contains("grid-square") &&
        e.target.style.backgroundColor == "" && isMouseDown) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}

page.addEventListener("mousedown", e => {
    isMouseDown = true;
    draw(e);
})
page.addEventListener("mouseup", () => isMouseDown = false)

grid.addEventListener("mouseover", e => draw(e))

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

UIContainer.addEventListener("mouseover", e => {
    if (e.target.classList.contains("button")) {
        e.target.style.scale = 1.1;
    }
})

UIContainer.addEventListener("mouseout", e => {
    if (e.target.classList.contains("button")) {
        e.target.style.scale = 1.0;
    }
})

createGrid(size);