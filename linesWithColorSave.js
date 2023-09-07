let y1s = [];
let y2s = [];
let colors = [];
let strokes = [];

let numLines = 10000;

function setup() {
	createCanvas(900, 900);

	for (let i = 0; i < numLines; i++) {
		let y1 = random(height);
		let y2 = random(height);
		y1s.push(y1);
		y2s.push(y2);
		colors.push(color(random(200), random(255), random(255), 40));
		strokes.push(random(10, 100));
	}
}

function draw() {
	//background(0);

	for (let i = 0; i < numLines; i++) {
		stroke(colors[i]);

		strokeWeight(strokes[i]);
		line(0, y1s[i], width, y2s[i]);
	}
  
	noStroke();
	fill(255);
	textSize(20);
	text("Work #95", width-105, height-30);
}

function mousePressed() {
	save("art.jpg");
}



