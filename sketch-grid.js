// Target the container element for the Sketch Grid
const sketchGridContainerElementSelector = "main";
const sketchGridContainerElement = document.querySelector(sketchGridContainerElementSelector);

// Create Sketch Grid
function populateSketchGrid(grid, gridSideLength, sideSquareCount) {
    grid.innerHTML = "";
    const squareSideLength = gridSideLength / sideSquareCount;
    for (let i = 0; i < sideSquareCount**2; i++) {
        const square = document.createElement("div");
        square.style.width = `${squareSideLength}px`;
        square.style.height = `${squareSideLength}px`;
        square.style.backgroundColor = "#FFF";

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
        });

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

newGridButton.addEventListener("click", () => {
    var validData = false;
    var squaresPerRow = 16;
    while (!validData) {
        const response = window.prompt("How many squares in each row would you like in your new grid?", "16");

        if (!response) return;

        const intResponse = Number.parseInt(response);
        if (intResponse != NaN && response > 0 && response <= 100 && response == intResponse) {
            validData = true;
            squaresPerRow = intResponse;
            continue;
        }

        if (!window.confirm("The number of squares per row must be an integer value between 1 and 100.")) return;
    }
    console.log(squaresPerRow);
    populateSketchGrid(grid, gridSideLength, squaresPerRow);
})

populateSketchGrid(grid, gridSideLength, 16);

article.appendChild(newGridButton);
article.appendChild(grid);
sketchGridContainerElement.appendChild(article);