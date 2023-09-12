const MAX_SIZE = 400;
const MAX_CYCLES = 15;

class Bloom {
	constructor(x, y, color, note) {
		this.x = x;
		this.y = y;
		this.color = color
		this.size = 0;
		this.cycles = 0;
		this.note = note;
		this.note.play();
		this.factor = 1.0;
	}

	update() {
		if (this.cycles <= MAX_CYCLES) {
			this.size++;

			if (this.size >= MAX_SIZE) {
				this.factor = map(this.cycles, 0, MAX_CYCLES, 1, .1);
				this.size = 0;
				this.cycles++;
				let volume = map(this.cycles, 0, MAX_CYCLES, 0.7, .05) * this.factor;
				this.note.setVolume(volume);
				this.note.play();
			}
		}
	}

	display() {
		if (this.cycles <= MAX_CYCLES) {
			noStroke();
			let alpha = map(this.size, 0, MAX_SIZE, 255, 0) * this.factor;
			this.color.setAlpha(alpha);
			fill(this.color);
			circle(this.x, this.y, this.size * 2);
		}
	}

	isComplete() {
		return !(this.cycles <= MAX_CYCLES);
	}
}
