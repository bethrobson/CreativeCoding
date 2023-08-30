function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();

	let color1 = color(random(250), random(250), random(250));
	let color2 = color(random(250), random(250), random(250));
	let color3 = color(random(250), random(250), random(250));

	background(color3, 180);
  
	for (let i = 0; i < width; i += 50) {
		for (let j = 0; j < height; j += 50) {
			let r = random(20, 40);
			let x = i + random(-10, 10);
			let y = j + random(-10, 10);
			if (random() < 0.5) {
				fill(color1);
				ellipse(x, y, r, r);
			} else {
				fill(color2);
				rectMode(CENTER);
				rect(x, y, r, r);
			}
		}
	}
}
