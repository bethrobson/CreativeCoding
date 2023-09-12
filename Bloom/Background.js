class Background {
    constructor() {
        this.hue1 = 170;
        this.hue2 = 220;
        this.inc = .05;
    }

    update() {
        this.hue1 += this.inc;
        this.hue2 += this.inc;

        if (this.hue1 <= 0) {
            this.inc *= -1;
        }
        if (this.hue2 >= 255) {
            this.inc *= -1;
        }
    }

    display() {
        colorMode(HSB);
        for (let y = 0; y < height; y++) {
            let c = map(y, 0, height, this.hue2, this.hue1);
            stroke(c, 50, 220);
            line(0, y, width, y);
        }

    }

}