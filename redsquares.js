// overlapping red squares a la Vera Molnar
// reload to see variations
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(250, 247, 239);
	fill(196, 45, 43, 190);
	let squareSize = 150;
	let numSquares = 9;
	let x = (random(1) * width) - squareSize;
	let y = (random(1) * height) - squareSize;
	for (let i = 0; i < numSquares; i++) {
		let a = random(330, 360);
		push();
		translate(x, y);
		rotate(a);
		rect(0, 0, squareSize, squareSize);
		pop();
		x += random(-squareSize, squareSize);
		if (x < squareSize || x > squareSize) {
			x = (random(1) * width) - squareSize;
		}
		y += random(squareSize);
		if (y < squareSize || y > squareSize) {
			y = (random(1) * height) - squareSize;
		}
	}
}
