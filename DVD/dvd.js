let dvd;
let x, y;
let xspeed = 1, yspeed = 1;

function preload() {
    dvd = loadImage('images/dvd_logo.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    x = 10;
    y = 10;
    colorMode(HSB);
}

function draw() {
    background(0);

    image(dvd, x, y);
    x += xspeed;
    y += yspeed;

    if (x + dvd.width >= width) {
        xspeed = -xspeed;
        x = width - dvd.width;
        newColor();
    } else if (x <= 0) {
        xspeed = -xspeed;
        x = 0;
        newColor();
    }

    if (y + dvd.height >= height) {
        yspeed = -yspeed;
        y = height - dvd.height;
        newColor();
    } else if (y <= 0) {
        yspeed = -yspeed;
        y = 0;
        newColor();
    }
}

function newColor() {
    h = random(100, 200);
    tint(h, 100, 100);
}


