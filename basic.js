function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    rectMode(CENTER);
    noFill();

    let squareSize = 40;
    let numSquares = 110;
    let margin = 100;
    for (let i = 0; i < numSquares; i++) {
        let x = random(margin, width-margin);
        let y = random(margin, height-margin);
        rect(x, y, squareSize, squareSize);
    }
}
