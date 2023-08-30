function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	//fill(mouseX);
	//rect(0, 0, width, height);

	let c = map(mouseX, 0, width, 0, 255);
	fill(c);
	rect(0, 0, width, height);
}
