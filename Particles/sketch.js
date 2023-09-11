let looping = true;
let particles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
// Stop making new particles after a while
	//if (particles.length < 1000) {
		for (let i = 0; i < 10; i++){
			let p = new Particle(width / 2, 0, random(-2, 2), random(10, 20));
			particles.push(p);
		}
	//}
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
