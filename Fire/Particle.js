class Particle {
  constructor(x, y, xspeed, yspeed, color) {
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
	this.color = color;
  }

  move() {
    this.x += this.xspeed;
    this.y -= this.yspeed;
// reset if off screen to reuse particles
	if (this.y < 0) {
		this.y = height;
		this.x = width/2;
	}
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, 10);
  }
}
