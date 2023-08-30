// Jiggled squares (a la Vera Molnar)

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(232, 228, 223); // buff
	strokeWeight(2);

	const lines = 100; // number of lines
	const big = 20, small = 10;
	let x = width/2, y = height/2; // start in the center
	let nextX = 0, nextY = 0; // init
	let maxSize = 10; // start with inner small shape and get bigger
	for (let i = 0; i < lines; i++) {
		let dir = i % 4;
		switch(dir) {
			// left
			case 0: 
				nextX = x - (maxSize + floor(random(-big, big)));
				nextY = y + floor(random(-small, small));
				break;
			// down
			case 1:
				nextX = x + floor(random(-small, small));
				nextY = y + (maxSize + floor(random(-big, big)));
				break;
			// right
			case 2:
				nextX = x + (maxSize + floor(random(-big, big)));
				nextY = y - floor(random(-small, small));

				break;
			// up
			case 3:
				nextX = x + floor(random(-small, small));
				nextY = y - (maxSize + floor(random(-big, big)));
				break;
		}
		line(x, y, nextX, nextY);
		x = nextX;
		y = nextY;
		maxSize += floor(random(small));
	}
}

