let x = 0; // x location of square
let y = 0; // y location of square
let speed = 5; // speed of square
let state = 0;

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(200);
    stroke(0);
    fill(50);
    rect(x, y, 9, 9);

    if (state == 0) {
        x = x + speed;
        if (x > width - 10) {
            x = width - 10;
            state = 1;
        }
    } else if (state == 1) {
        y = y + speed;
        if (y > height - 10) {
            y = height - 10;
            state = 2;
        }
    } else if (state == 2) {
        x = x - speed;
        if (x < 0) {
            x = 0;
            state = 3;
        }
    } else if (state == 3) {
        y = y - speed;
        if (y < 0) {
            y = 0;
            state = 0;
        }
    }
}
