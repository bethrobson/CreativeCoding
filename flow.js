// With thanks to Barney Codes, "Easy Perlin Noise Flow Fields" 
// https://www.youtube.com/watch?v=YcdldZ1E9gU

let particles = [];
const numParticles = 5000;

const noiseScale = 0.01;

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < numParticles; i++) {
		particles.push(createVector(random(width), random(height)));
	}
	stroke(255);
}

function draw() {
	background(0, 10);
	for (let i = 0; i < numParticles; i++) {
		let p = particles[i];
		point(p.x, p.y);
		let n = noise(p.x * noiseScale, p.y * noiseScale);
		let angle = TAU * n; // TAU = 2 * PI
		p.x += cos(angle);
		p.y += sin(angle);
		if (!onScreen(p)) {
			p.x = random(width);
			p.y = random(height);
		}
	}
}

// is the vector on the screen?
function onScreen(v) {
	return (v.x >= 0 && v.x <= width && v.y >=0 && v.y <= width);
}

function mousePressed() {
	if (isLooping()) { noLoop(); }
	else { loop(); }
}

// reseed the noise function
function mouseReleased() {
	noiseSeed(millis());
}

