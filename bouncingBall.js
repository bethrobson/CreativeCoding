/* 
 * Bouncing Ball
 */

let looping = true;
let x, y;
let xSpeed, ySpeed;

function setup() {
	createCanvas(windowWidth, windowHeight);
	x = 0;
	y = random(height);
	xSpeed = random(10, 15);
	ySpeed = random(10, 15);
}

function draw() {
	background(0); // black
	updateBall();
	displayBall();
}

function updateBall() {
	x += xSpeed;
	y += ySpeed;

	if (y > height || y < 0) {
		ySpeed *= -1;
	}

	if (x > width || x < 0) {
		xSpeed *= -1;
	}
}

function displayBall() {
	fill(255);
	circle(x, y, 30);
}

// extras!
function mousePressed() {
	if (looping) { noLoop(); }
	else { loop(); }
	looping = !looping;
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
