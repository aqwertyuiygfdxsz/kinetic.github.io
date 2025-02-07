let cols, rows;
let spacing = 25; // Grid spacing
let maxSize = 20; // Maximum size of elements
let minSize = 2; // Minimum size
let radiusEffect = 200; // Radius of effect
let t = 0; // Time variable for animation

function setup() {
    createCanvas(windowWidth, windowHeight);
    cols = width / spacing;
    rows = height / spacing;
    noStroke();
}

function draw() {
    background(0); // Solid black background

    for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
            let posX = x * spacing;
            let posY = y * spacing;

            // Distance from the mouse
            let d = dist(mouseX, mouseY, posX, posY);

            // Wavy motion effect
            let wave = sin(x * 0.1 + t * 0.05) * 5; 

            // Dynamically scale size based on proximity & waves
            let size = map(d, 0, radiusEffect, maxSize + wave, minSize);
            size = constrain(size, minSize, maxSize + wave);

            // Adjust brightness based on distance
            let brightness = map(size, minSize, maxSize, 50, 255);
            fill(brightness);

            rect(posX, posY, size, size);
        }
    }

    // "Flashlight" effect: Draw a circle at the mouse position
    let circleSize = map(mouseX, 0, width, 20, 100);

    fill(255); // Pure white for contrast
    ellipse(mouseX, mouseY, circleSize, circleSize);

    t += 1; // Increment time for animation
}
