//
// This is the program that makes the design for our
// course page on O'Reilly Learning
//
let looping = true;
let x, y;
let xoff = 0;
let yoff = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
	// pick a random starting location
	x = floor(random(width));
	y = floor(random(height));
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
	draw1();
	//draw2();
}

function draw1() {
	stroke(0);
	strokeWeight(1);
	let incX = round(random(-5, 5));
	let incY = round(random(-5, 5));
	if (x+incX <= 0 || x+incX >= width) {
		incX *= -2;
	}
	if (y+incY <=0 || y+incY >= height) {
		incY *= -2;
	}
	line(x, y, x+incX, y+incY);
	x = x+incX;
	y = y+incY;
}

function draw2() {
	stroke(0);
	strokeWeight(1);
	xoff = xoff + 0.01;
	yoff = yoff + 0.01;
	let incX = noise(xoff) * 10 * round(random(-1, 1));
	let incY = noise(yoff) * 10 * round(random(-1, 1));
	if (x+incX <= 0 || x+incX >= width) {
		incX *= -2;
	}
	if (y+incY <=0 || y+incY >= height) {
		incY *= -2;
	}
	line(x, y, x+incX, y+incY);
	x = x+incX;
	y = y+incY;
}

function mousePressed() {
    if (looping) { noLoop(); }
    else { loop(); }
    looping = !looping;
}
