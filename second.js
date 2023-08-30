function setup() {
	createCanvas(400, 400);
	background(220);
    fill(0);

	let i = 0;
	while (i < 10) {
    	rect(i*30, height/2, 10, 10);
    	i = i + 1;
	}

/*
	for (let i = 0; i < 10; i++) {
    	rect(i*30, height/2, 10, 10);
	}
*/
		
}

