function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	fill(0);

	for (let x = 0; x < width; x += 80) {
		rect(x, height/2, 60, 60);
	}
}
