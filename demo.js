function setup() {
    createCanvas(windowWidth, windowHeight);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    background(0);
	let timet = millis() / 1000.0;
    for (let i = 0; i < windowHeight-100; i++) {
		let c = color(
			127 + 127 * sin(i * -0.15 + timet),
			127 + 148 * sin(i * 0.049 + timet),
			127 + 127 * sin(i * 0.048 + timet),
			13
		);
		fill(c);
		circle(
			(windowWidth/2) + 60 * sin(i * -0.061198 + timet),
			50 + i,
			50 + (50 * sin(i * -0.00207 + timet))
		);
    }
}
