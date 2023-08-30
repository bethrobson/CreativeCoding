function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	fill(0);

	let squareSize = 40;
	for (let i = 0; i < 20; i++) {
		let x = random(width-squareSize);
		let y = random(height-squareSize);
		let c = map(x, 0, width-squareSize, 0, 255);
		// exercise
		//let c = map(y, 0, height-squareSize, 0, 255);
		fill(c);
		square(x, y, squareSize);
	}


}

