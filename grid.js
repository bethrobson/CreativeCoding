// grid of squares

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	rectMode(CENTER);
	// grid of squares
	for (let i = 100; i <= width-100; i += 100) {
		for (let j = 100; j <= height-100; j += 100) {
			rect(i, j, 90, 90);
		}
	}
}
