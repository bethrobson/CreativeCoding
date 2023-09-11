let particles = [];
let reParticles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	for (let i = 0; i < 10; i++){
		let p = new Particle(width / 2, 0, random(-2, 2), random(10, 20));
		particles.push(p);
	}
	for (let i = 0; i < particles.length; i++) {
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
	constructor(x, y, xspeed, yspeed) {
		this.x = x;
		this.y = y;
		this.xspeed = xspeed;
		this.yspeed = yspeed;
	}
	move() {
		this.x += this.xspeed;
		this.y += this.yspeed;
	}
	isOffScreen() {
		if (this.y > height) {
			return true;
		} else {
			return false;
		}
	}
	display() {
		noStroke();
		fill(128,128,255, 128);
		circle(this.x, this.y, 10);
	}
}
