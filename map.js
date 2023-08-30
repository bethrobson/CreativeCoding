function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	fill(0);

	let squareSize = 40;
	let numSquares = 20;
	for (let i = 0; i < 20; i++) {
		let x = i * (width - squareSize)/(numSquares - 1);
		let y = i * (height - squareSize)/(numSquares - 1);
		let c = map(x, 0, width-squareSize, 0, 255);
		fill(c);
		square(x, y, squareSize);
	}
}

