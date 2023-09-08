let angle = 0;
let x = 0;
let y = 0;
let speed = 0.05;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	background(255);
}

function draw() {
	background(255, 10);

	let currentTime = millis();

	// Move the circle around the canvas
	x = width/2 + cos(angle)*100;
	y = height/2 + sin(angle)*100;

	fill(currentTime % 10, 100, 100);
	ellipse(x, y, 50, 50);

	angle += speed;
}

function mousePressed() {
	if (isLooping()) { noLoop(); }
	else { loop(); }
}
