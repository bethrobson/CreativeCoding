let particles = [];
let reParticles = [];
let snowLevel;

function setup() {
	createCanvas(windowWidth, windowHeight);
	snowLevel = height+10;
}

function draw() {
	background(0);
	if (snowLevel > height/2) {
		for (i = 0; i < 10; i++) {
			let p = new Particle(random(width), 0, random(-2, 2), random(2, 10));
			particles.push(p);
		}
		snowLevel -= 0.1;
	}
	for (i = 0; i < particles.length; i++) {
		particles[i].move();
		particles[i].display();
		if (!particles[i].isOffScreen()) {
			reParticles.push(particles[i]);
		}
	}
	fill(255);
	rect(0, snowLevel+0.1, width, height-snowLevel);
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
		this.color = color(255, 175);
	}
	move() {
		this.x += this.xspeed;
		this.y += this.yspeed;
	}
	isOffScreen() {
		if (this.y >= snowLevel) {
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

