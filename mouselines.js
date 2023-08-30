function setup() {
    createCanvas(windowWidth, windowHeight);
	background(0);
	stroke(255);
	strokeWeight(4);
}

function draw() {
	drawLines1();
	//drawLines2();
	//drawLines3();
	//drawLines4();
	//drawLines5();
	//drawLines6();
}

function drawLines1() {
	line(0, 0, mouseX, mouseY);
}
function drawLines2() {
	stroke(255, 5, 45, 20);
	line(0, 0, mouseX, mouseY);
}
function drawLines3() {
	background(0, 0, 0, 10);
	line(0, 0, mouseX, mouseY);
}
function drawLines4() {
	let centerX = width/2;
	let centerY = height/2;
	line(mouseX, mouseY, centerX, centerY);
}
function drawLines5() {
	background(0, 0, 0, 10);
	line(width-mouseX, height-mouseY, mouseX, mouseY);
}
function drawLines6() {
	//line(pmouseX, pmouseY, mouseX, mouseY);
	//line(pmouseX-10, pmouseY-10, mouseX, mouseY);
	strokeWeight(2);
	let x = random(0,20);
	let y = random(-20,0);
	line(pmouseX+x, pmouseY+y, mouseX, mouseY);
}
