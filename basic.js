function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
	rectMode(CENTER);
	noFill();
	stroke(0);
	let squareSize = 50;
	let numSquares = 30;
	for (let i = 0; i < numSquares; i++) {
		let x = random(100, width-(squareSize + 100));
		let y = random(100, height-(squareSize + 100));
		rect(x, y, squareSize, squareSize);
	}
}
