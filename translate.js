function setup() {
    createCanvas(windowWidth, windowHeight);
	rectMode(CENTER); // rotate rectangles from center point
    background(255);
	strokeWeight(0);

	let colors = [
		color("#264653"),
		color("#2a9d8f"),
		color("#e9c46a"),
		color("#f4a261"),
		color("#e76f51")
	];

	let w;
	// play with n and a!
	let n = 12;
	let a = PI/25; // play with this angle

	if (width < height) { // set the size of the square
		w = width/2;
	} else {
		w = height/2;
	}

	let x = 0, y = 0;
	push();
	translate(width/2, height/2); // translate origin to center

	for (let i = 0; i < n; i++) {
		let c = colors[i % colors.length];
		c.setAlpha(50); // play with this alpha
		fill(c);
		rect(x, y, w, w);
		rotate(a);
	}
	pop();

}
