class Particle {
  constructor(x, y, xspeed, yspeed) {
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
/*
// keep reusing particles
	if (this.y > height) {
		this.y = 0;
	}
// make it snow
	if (this.x < 0 || this.x > width) {
		this.x = width / 2;
	}
*/
  }

  display() {
    noStroke();
    fill(128,128,255, 128);
    circle(this.x, this.y, 10);
  }
}
