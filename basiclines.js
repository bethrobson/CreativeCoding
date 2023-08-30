function setup() {
    createCanvas(windowWidth, windowHeight);

	rect(0,0, width-1, height-1);
	for (var i = 0; i < height; i += 30) {
		line(0, i, width, i);
	}
}
