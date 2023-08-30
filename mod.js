function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
	strokeWeight(0);

	let colors = [color("#033F63"), color("#28666E"), color("#7C9885"), color("#B5B682"), color("#FEDC97")];
	let w = 50;
	let h = height;
	let n = floor(width/w);
	let x = 0;
    for (let i = 0; i < n; i++) {
		let index = i % 5;
		fill(colors[index]);
		rect(x, 0, w, h);
		x = x + w;
	}
}
