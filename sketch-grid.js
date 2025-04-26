// Target the container element for the Sketch Grid
const sketchGridContainerElementSelector = "main";
const sketchGridContainerElement = document.querySelector(sketchGridContainerElementSelector);

// Create Sketch Grid
function populateSketchGrid(grid, sideLength) {
    for (let i = 0; i < sideLength**2; i++) {
        const square = document.createElement("div");
        square.className = "square";
        grid.appendChild(square);
    }
}

const article = document.createElement("article");
article.classList.add("sketch-grid");

const newGridButton = document.createElement("button");
newGridButton.type = "button";
newGridButton.innerText = "New Grid";

const grid = document.createElement("div");

populateSketchGrid(grid, 16);

article.appendChild(newGridButton);
article.appendChild(grid);
sketchGridContainerElement.appendChild(article);