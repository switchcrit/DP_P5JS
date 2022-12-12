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
    "https://freight.cargo.site/t/original/i/46ed58415afe4ac8f63284da3b73ed4aba65cf827609ff57dea9676dfc79e5c6/BG-full.png"
  );
  img2 = loadImage(
    "https://freight.cargo.site/t/original/i/b2d5e3c154745a6db5db78bbdfb6c972a9f959e753ccc837f80382452b1acb04/img_1.png"
  );
  img3 = loadImage(
    "https://freight.cargo.site/t/original/i/fedb11efde65f66b7d459b04c8305289653323bff48106314b21948a688d01e9/img_2.png"
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
