let x;
let y;
let xspeed;
let yspeed;
let c = 255;

function setup() {
	createCanvas(windowWidth, windowHeight);
	x = 0;
	y = random(height);
	xspeed = random(20, 25);
	yspeed = random(20, 25);
	background(0);
}

function draw() {
	//background(0); // 1
// background fade
	background(0, 0, 0, 8); // 2
	move1();
	display();
}

function move1() {
	if (x > width || x < 0) {
		xspeed *= -1;
	}
	if (y > height || y < 0) {
		yspeed *= -1;
	}
	x += xspeed;
	y += yspeed;
}

function display() {
	// fill(255); // 1
// random color change
	// let r = floor(random(10, 255)); // 2
	// fill(r, 255, 255); // 2
// gradient color change
	fill(c, 255, 255); // 3
	if (c > 10) {
		c = c - 10;
	} else if (c < 255) {
		c = c + 10;
	}
	ellipse(x, y, 30, 30);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

