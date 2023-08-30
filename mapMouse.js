function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	// Map the mouse x position to a range between 0 and 255
	let r = map(mouseX, 0, width, 0, 255);

	// Map the mouse y position to a range between 0 and 255
	let g = map(mouseY, 0, height, 0, 255);

	// Set the fill color using the mapped values
	fill(r, g, 150);

	// Draw the rectangle
	rect(0, 0, width, height);
}
