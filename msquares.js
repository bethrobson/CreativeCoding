// This code draws a grid of nested squares
function setup() {
	createCanvas(windowWidth, windowHeight);

	background(227, 222, 211);
	stroke(154, 136, 110);
	strokeWeight(2);
	noFill();
	rectMode(CENTER);

	let squareSize = 100;
	let margin = squareSize;
	for (let i = 0 + margin; i <= width - margin; i += squareSize) { 
		for (let j = 0 + margin; j <= height - margin; j += squareSize) { 
			drawSquare(i, j, squareSize);
		}
	}
}

function drawSquare(x, y, squareSize) {
	for (let i = 0; i < squareSize; i += squareSize/10) {
		rect(x, y, i, i); // 1

		//2
/*
		if (i % 2 == 0) {
			if (random(1) < 0.95 ||    // use > to reverse
				i == squareSize - (squareSize/10)) {  // remove to reverse
				rect(x, y, i, i);
			}
		}
*/
	}
}

