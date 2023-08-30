let looping = true;
let particles = [];
let colors = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	let red = color(255, 0, 0, 128);
	let orange = color(235, 161, 52, 128);
	let yellow = color(232, 235, 52, 128);
	let white = color(255, 255, 255, 128);
	colors = [ red, orange, yellow, white ];
}

function draw() {
	background(0);
	if (particles.length < 1000) {
		for (let i = 0; i < 10; i++){
			let pickColor = (floor(random(0, 4)));
			let c = colors[pickColor];
			let p = new Particle(width/2, height, random(-2,2), random(2,10), c);
			particles.push(p);
		}
	}
	for (let i = 0; i < particles.length; i++) {
		particles[i].move();
		particles[i].display();
	}
}

function mousePressed() {
    looping = !looping;
    if (looping) { noLoop(); }
    else { loop(); }
}
