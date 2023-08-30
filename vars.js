
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	/*
	   Play with variables
	 */

	let black = 0;
	let white = "#FFF";
	let weight = 5;
	let centerW = width / 2;
	let centerH = height/ 2;
	let radius = 200;
	
	stroke(black);
	strokeWeight(weight);
	fill(white);
	circle(centerW, centerH, radius);
}

