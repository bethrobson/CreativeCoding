function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
	rectMode(CENTER);
	noFill();
	
	let squareSize = 40;
	let numSquares = 110;
	for (let i = 0; i < numSquares; i++) {
		let x = random(100, width-100);
		let y = random(100, height-100);
		rect(x, y, squareSize, squareSize);
	}
}
