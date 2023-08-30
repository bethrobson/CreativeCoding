
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	/*
	   Draw a face!
	 */

	stroke(0);       // set the color of the stroke to black
	strokeWeight(5); // heavier stroke so we can see the point

	fill(138, 222, 154);		// green
	circle(300, 300, 500); 		// head
	fill(237, 232, 71, 150);	// semi transparent yellow
	ellipse(200, 250, 100, 50); // eye
	point(200, 250); 			// eye
	ellipse(400, 250, 100, 50); // eye
	point(400, 250); 			// eye
	strokeWeight(4);
	stroke(11, 140, 35);
	line(300, 250, 300, 400); 	// nose
	line(200, 450, 400, 450); 	// mouth
}

