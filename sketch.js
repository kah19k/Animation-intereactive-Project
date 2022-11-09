

let w = 600;
let h = 600;
let randomX, randomY, randomSize;

function setup() {
  createCanvas(w,h);
  background ("lightblue");
  fill(235,40);
  stroke(200,10);
  strokeWeight(10);
}

function draw() {
  circle(mouseX, mouseY, 20);
  if (frameCount % 1 == 0) randomX = random(-55,55);
  if (frameCount % 1 == 0) randomY = random(-55,55);
  if (frameCount % 100 == 0) randomSize = random(30,60);
  circle(mouseX+randomX, mouseY+randomY , randomSize);

  if (keyIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }
  circle(50,50,50);
  describe('50-by-50 white rect that turns black on keypress.');
}

