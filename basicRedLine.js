function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
	drawRedLine(10, 100, 300, 100);
}

function drawRedLine(x1, y1, x2, y2) {
	stroke(255, 0, 0); // red line
	strokeWeight(5);
	line(x1, y1, x2, y2);
}
