let particles = [];
let reParticles = [];
let colors = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	let red = color(255, 0, 0, 128);
	let orange = color(235, 161, 52, 128);
	let yellow = color(232, 235, 52, 128);
	let white = color(255, 255, 255, 128);
	colors = [red, orange, yellow, white]; 
}

function draw() {
	background(0);
	for (i = 0; i < 10; i++) {
		let pickColor = (floor(random(0, 4)));
		let c = colors[pickColor];
		let p = new Particle(width / 2, height, random(-2, 2), random(2, 10), c);
		particles.push(p);
	}
	for (i = 0; i < particles.length; i++) {
		particles[i].move();
		particles[i].display();
		if (!particles[i].isOffScreen()) {
			reParticles.push(particles[i]);
		}
	}
	particles = reParticles;
	reParticles = [];
}

function mousePressed() {
	if (isLooping()) { noLoop(); }
	else { loop(); }
}

class Particle {
	constructor(x, y, xspeed, yspeed, color ) {
		this.x = x;
		this.y = y;
		this.xspeed = xspeed;
		this.yspeed = yspeed;
		this.color = color;
	}
	move() {
		this.x += this.xspeed;
		this.y -= this.yspeed;
	}
	isOffScreen() {
		// for fire, the particle is off screen is y < height and x < 0 or > width
		if (this.y < 0 || this.x < 0 || this.x > width) {
			return true;
		} else {
			return false;
		}
	}
	display() {
		noStroke();
		fill(this.color);
		circle(this.x, this.y, 10);
	}
}

