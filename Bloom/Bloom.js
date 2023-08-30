class Bloom {
	MAX_SIZE = 400;
	MAX_CYCLES = 15;
	size = 0;
	cycles = 0;
	colors = ["#5902EC", "#E04DB0", "#F2C9E1", "#FFFA4D", "#F9D371", "#F47340", "#EF2F88", "#8843F2"];

	constructor(x, y, audio) {
		this.x = x;
		this.y = y;
		this.audio = audio;
		this.c = color(this.colors[Math.round(random(0, this.colors.length - 1))]);
		let numOfSounds = this.audio.samples.length;
		let soundIndex = Math.round(random(0, numOfSounds - 1));
		this.sound = this.audio.makeSound(soundIndex);
		this.sound.play();
	}

	update() {
		if (this.cycles <= this.MAX_CYCLES) {
			this.size++;

			if (this.size >= this.MAX_SIZE) {
				this.size = 0;
				this.cycles++;
				let volume = map(this.cycles, 0, this.MAX_CYCLES, 1.0, .2);
				this.sound.setVolume(volume);
				this.sound.play();
			}
		}
	}

	display() {
		if (this.cycles <= this.MAX_CYCLES) {
			let alpha = map(this.size, 0, this.MAX_SIZE, 255, 0);
			noStroke();
			this.c.setAlpha(alpha);
			fill(this.c);
			circle(this.x, this.y, this.size);
		}
	}
}
