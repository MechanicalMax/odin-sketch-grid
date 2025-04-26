// Target the container element for the Sketch Grid
const sketchGridContainerElementSelector = "main";
const sketchGridContainerElement = document.querySelector(sketchGridContainerElementSelector);

// Create Sketch Grid
function populateSketchGrid(grid, sideLength) {
    for (let i = 0; i < sideLength**2; i++) {
        const square = document.createElement("div");
        square.className = "square"
        grid.appendChild(square);
    }
}

const article = document.createElement("article")
article.classList.add("sketch-grid");

populateSketchGrid(article, 16);

sketchGridContainerElement.appendChild(article);