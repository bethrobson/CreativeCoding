let looping = true;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	frameRate(4);
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	molnar1();
};

function molnar1() {
	let r = 50;
	let mR = 0.20;
	let w = Math.floor(width * (1-mR));
	let h = Math.floor(height * (1-mR));
	fill(220, 220, 220, 100);
	noStroke();
	rect(0, 0, windowWidth, windowHeight);
	noFill();
	stroke(0);
	strokeWeight(2);
	push();
	translate(0.5 * width * mR, 0.5 * height * mR);
	makeQuad(w, h, r);
	pop();
}

function makeQuad(w, h, r) {
	let x1 = random(-r, r);
	let y1 = random(-r, r);
	let x2 = w + random(-r, r);
	let y2 = random(-r, r);
	let x3 = w + random(-r, r);
	let y3 = h + random(-r, r);
	let x4 = random(-r, r);
	let y4 = h + random(-r, r);
	quad(x1, y1, x2, y2, x3, y3, x4, y4);
}

function mousePressed() {
	looping = !looping;
	if (looping) { noLoop(); }
	else { loop(); }
}

