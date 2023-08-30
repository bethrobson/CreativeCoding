// One wrong square (a la Vera Molnar)

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	fill(227, 222, 211); // buff
	noStroke();

	let isDone = false;
	let ss = 100; // square size
	let rX = random(width), rY = random(height);
	translate(ss, ss);
	for (let x = 0; x < width-2*ss; x += 2*ss) {
		for (let y = 0; y < height-2*ss; y += 2*ss) {
			if (x > rX && y > rY && !isDone) {
				// rotate the square a bit
				push();
				translate(x, y);
				let a = radians(5);
				rotate(a);
				fill(180); // grey
				rect(0, 0, ss);
				pop();
				fill(227, 222, 211); // buff
				isDone = true;
			} else {
				rect(x, y, ss);
			}
		}
	}
}

