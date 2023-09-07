// grid of squares

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);

    rectMode(CENTER);
    let margin = 100;
    // grid of squares
    for (let x = margin; x <= width-margin; x += 100) {
        for (let y = margin; y <= height-margin; y += 100) {
            rect(x, y, 90, 90);
        }
    }
}
