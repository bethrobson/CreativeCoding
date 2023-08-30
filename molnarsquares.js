// global variables
let padding = 20;
let maxSw = 15;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	let numSquares = 12;
	let squareSize = (width-padding) / numSquares;
	let rows = (height-padding) / squareSize;
	// move over by padding + max stroke weight
	let tr = padding + (2 * maxSw);
	translate(tr, tr);
	// we use translate so we can keep things 0 based (for easier math!)
	let x = 0, y = 0;
	// draw each square from its center instead of corner
	//  (since we're nesting them)
	rectMode(CENTER);
	for (let i = 0; i < rows; i++) { 
		for (let j = 0; j < numSquares; j++) {
			x = j * squareSize;
			drawSquare(x, y, squareSize, true); // start out black (true)
		}
		y = i * squareSize;
	}
}

// drawSquare is recursive, alternating between black and white squares
//   each call making a smaller and smaller square.
// We stop when the squareSize is < 10. This is our termination condition for
//   the recursion.
function drawSquare(x, y, squareSize, black) {
	let sw = floor(random(1, maxSw)); // random stroke width 
	strokeWeight(sw);
	if (black) {
		stroke(0);
	} else {
		stroke(255);
	}
	rect(x+padding, y+padding, squareSize-padding, squareSize-padding);
	squareSize= squareSize - floor(random(1, padding-sw));
	if (squareSize < 10) {
		return;
	}
	else {
		drawSquare(x, y, squareSize, !black);
	}
}
