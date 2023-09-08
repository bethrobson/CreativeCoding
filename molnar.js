function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	frameRate(4);
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	let grey = color(220, 220, 220, 40);
	let blue = color(0, 38, 255);
	let turq = color(0, 255, 229);
	let pink = color(255, 128, 0);
	let purple = color(255, 0, 212);
	let colors = [ blue, turq, pink, purple ];
	let s = 100;
	let r = 20;
	fill(grey);
	noStroke();
	rect(0, 0, width, height);
	noFill();
	stroke(0);
	strokeWeight(2);
	push();
	translate(100, 100);
	for (let i = 0; i < 6; i++) {
		for (let j = 0; j < 6; j++) {
			let x1 = i*s + floor(random(-r, r));
			let y1 = j*s + floor(random(-r, r));
			let x2 = x1 + s + floor(random(-r, r));
			let y2 = y1 + floor(random(-r, r));
			let x3 = x2 + floor(random(-r, r));
			let y3 = y2 + s + floor(random(-r, r));
			let x4 = x1 + floor(random(-r, r));
			let y4 = y1 + s + floor(random(-r, r));

			let pickColor = floor(random(0, 4));
			stroke(colors[pickColor]);
			quad(x1, y1, x2, y2, x3, y3, x4, y4);
		}
	}
	pop();
}
function mousePressed() {
	if (isLooping()) { noLoop(); }
	else { loop(); }
}
