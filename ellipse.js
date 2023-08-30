function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	//background(120); // dark gray
	fill("#CCCCCC"); // light gray
}

function draw() {
	background(120); // dark gray
	ellipse(mouseX, mouseY, 150, 100);
}

// Day 2
function mousePressed() {
	console.log("You pressed the mouse!");
}

function keyPressed() {
	background(0);
}
