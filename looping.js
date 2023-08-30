// basic rectangular and ellipse shapes with loops

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	// 1. lines across the page	
	rect(0, 0, width-1, height-1);
	for (let i = 0; i < height; i += 30) {
		line(0, i, width, i);
	}

/*
	// 2. concentric ellipses
	rect(0, 0, width-1, height-1);
	for (let i = 0; i < height; i+= 50) {
		fill(0, 40); // black at 40 opacity
		// note center mode of ellipse versus rect
		ellipse(width/2, height/2, i, i);
	}
*/
}
