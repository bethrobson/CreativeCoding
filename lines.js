function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	background(0); // black
}

function draw() {
	let c = random(25, 255);
	stroke(c);
	strokeWeight(5);
	let y1 = random(height);
	let y2 = random(height);
	line(0, y1, width, y2);
}

