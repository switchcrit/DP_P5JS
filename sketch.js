// Declare the variables for the images
let img1;
let img2;
let img3;

// Declare a variable to store the starting x position of image 1
let xPos;
let winku = 255;
let happyu = 255;

function setup() {
  // Load the images from files
  img1 = loadImage(
    "BG%20full.png"
  );
  img2 = loadImage(
    "img_1.png"
  );
  img3 = loadImage(
    "img_2.png"
  );

  // Set the starting x position of image 1
  xPos = 0;

  // Set the size of the window
  createCanvas(600, 600);
}

function draw() {
  // Update the x position of image 1 based on the current time
  xPos = map(sin(millis() / 4000.0), -1, 1, 0, width - img1.width);

  // Draw the first image to the screen
  image(img1, xPos, 0);
  image(img3, 0, 0);
}
