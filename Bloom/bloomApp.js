// fix "memory leak" with blooms

let hexcolors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"];
let blooms = [];
let bg;

function preload() {
	audio = new Audio();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	bg = new Background();
}

function draw() {
	bg.update();
	bg.display();
	colorMode(RGB);

	if (random(3) < .003) {
		let x = random(0, width);
		let y = random(0, height);
		let bloom = new Bloom(x, y, getColor(), getNote());
		blooms.push(bloom);
	}

	let tmp = [];
	for (let i = 0; i < blooms.length; i++) {
		if (!blooms[i].isComplete()) {
			tmp.push(blooms[i]);
			blooms[i].update();
			blooms[i].display();
		}
	}
	blooms = tmp;
}

function getColor() {
	let index = floor(random(0, hexcolors.length - 1));
	return color(hexcolors[index]);
}

function mousePressed() {
	let bloom = new Bloom(mouseX, mouseY, getColor(), getNote());
	blooms.push(bloom);
}

function getNote() {
	let numOfSounds = audio.samples.length;
	let soundIndex = floor(random(0, numOfSounds - 1));
	return audio.makeSound(soundIndex);
}

