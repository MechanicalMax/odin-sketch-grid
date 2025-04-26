// Target the container element for the Sketch Grid
const sketchGridContainerElementSelector = "main";
const sketchGridContainerElement = document.querySelector(sketchGridContainerElementSelector);

// Create Sketch Grid
const article = document.createElement("article")
article.classList.add("sketch-grid");

sketchGridContainerElement.appendChild(article);