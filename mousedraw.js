function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
	fill(15, 15, 140);
}
function draw() {
	// version 1
	draw1();

	// version 2 - draw with a circle shape
	//draw2();

	// version 3 - transparency
	//fill(15, 15, 140, 140);
	//draw3();

	// version 4 - randomness
	//let r = 10;
	//stroke(15, 15, 140);
	//draw4(r);
}

function draw1() {
    line(pmouseX, pmouseY, mouseX, mouseY);
}

function draw2() {
	circle(mouseX, mouseY, 20);
}

function draw3() {
	circle(mouseX, mouseY, 20);
}

function draw4(r) {
    line(pmouseX, pmouseY, mouseX, mouseY);
	let x = random(-r/2, r/2);
	let y = random(-r, 0);
	line(pmouseX, pmouseY, pmouseX + x, pmouseY + y);
}

