/* 
 * Pong
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
	drawPaddle();
	updateBall();
	displayBall();
}

function updateBall() {
	x += xSpeed;
	y += ySpeed;

	if (y > height || y < 0) {
		ySpeed *= -1;
	}
	if (x < 0) {
		xSpeed *= -1;
	}
	if ((x+30 > width-50) && (y > mouseY) && (y < mouseY+150)) {
		xSpeed *= -1;
	}
	if (x > width+30) {
		noLoop();
		console.log("You missed!");
	}
}

function displayBall() {
	fill(255);
	circle(x, y, 30);
}

function drawPaddle() {
	rect(width-50, mouseY, 50, 150);
}

// extras!
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
function keyPressed() {
	console.log(key);
	if (key == "s") {
		looping = !looping;
		if (looping) { noLoop(); }
    	else { loop(); }
	}
}
