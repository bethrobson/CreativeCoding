let colors = ["#FFC107", "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FF9800", "#795548", "#9E9E9E", "#607D8B"];

function setup() {
    createCanvas(windowWidth, 100);
    background(255);
    noStroke();
    drawSquares();
}   

function drawSquares() {
    const squareSize = 30;
    const numRows = height / squareSize;
    const numCols = width / squareSize;
  
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            fill(random(colors));
            square(col * squareSize, row * squareSize, squareSize);
        }
    }
}
