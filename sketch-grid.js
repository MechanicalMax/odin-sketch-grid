// Target the container element for the Sketch Grid
const sketchGridContainerElementSelector = "main";
const sketchGridContainerElement = document.querySelector(sketchGridContainerElementSelector);

// Create Sketch Grid
function populateSketchGrid(grid, gridSideLength, sideSquareCount) {
    const squareSideLength = gridSideLength / sideSquareCount;
    for (let i = 0; i < sideSquareCount**2; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style = `background-color: black; width: ${squareSideLength}px; height: ${squareSideLength}px`;
        grid.appendChild(square);
    }
}

const article = document.createElement("article");
article.classList.add("sketch-grid");

const newGridButton = document.createElement("button");
newGridButton.type = "button";
newGridButton.innerText = "New Grid";

const grid = document.createElement("div");
const gridSideLength = 1000;
grid.style.width = `${gridSideLength}px`;
grid.style.height = `${gridSideLength}px`;

populateSketchGrid(grid, gridSideLength, 16);

article.appendChild(newGridButton);
article.appendChild(grid);
sketchGridContainerElement.appendChild(article);