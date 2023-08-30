class Audio {
	fileNames = ["A4.mp3", "A5.mp3", "C4.mp3", "C5.mp3", "D4.mp3", "D5.mp3", "E4.mp3", "E5.mp3", "G4.mp3", "G5.mp3"];
	samples = [];

	constructor() {
		for (let i = 0; i < this.fileNames.length; i++) {
			this.samples.push(loadSound("./assets/" + this.fileNames[i]));
		}
		// for (let i = 0; i < this.fileNames.length; i++) {
		// 	let sound = loadSound("./assets/" + this.fileNames[i]);
		// 	sound.rate(2.0);
		// 	this.samples.push(sound);
		// }
		for (let i = 0; i < this.fileNames.length; i++) {
			let sound = loadSound("./assets/" + this.fileNames[i]);
			sound.rate(0.25);
			this.samples.push(sound);
		}
	}

	makeSound(num) {
		return this.samples[num];
	}
}


