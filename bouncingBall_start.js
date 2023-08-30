/* 
 * Bouncing Ball
 */

let x, y;

function setup() {
	createCanvas(windowWidth, windowHeight);
	x = 0;
	y = random(height);
}

function draw() {
	background(0); // black
	updateBall();
	displayBall();
}

function updateBall() {
}

function displayBall() {
	fill(255);
	circle(x, y, 30);
}

