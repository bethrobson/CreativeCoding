let audio;
let blooms = [];

function preload() {
	audio = new Audio();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background('blue');

/* 2
	if (random(0, 35) < .01) {
		let x = random(0, width);
		let y = random(0, height);
		let bloom = new Bloom(x, y, audio);
		blooms.push(bloom);
	}
*/

	for (let i = 0; i < blooms.length; i++) {
		blooms[i].update();
		blooms[i].display();
	}
}

function mousePressed() {
	let bloom = new Bloom(mouseX, mouseY, audio);
	blooms.push(bloom);
}

