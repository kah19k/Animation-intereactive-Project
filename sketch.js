let w = 600;
let h = 600;
let randomX, randomY, randomSize;

function setup() {
  createCanvas(w,h);
  background ("lightblue");
  fill(255,30);
  stroke(125,20);
  strokeWeight(10);
}

function draw() {
  circle(mouseX, mouseY, 20);
  if (frameCount % 1 == 0) randomX = random(-55,55);
  if (frameCount % 1 == 0) randomY = random(-55,55);
  if (frameCount % 200 == 0) randomSize = random(10,160);
  circle(mouseX+randomX, mouseY+randomY , randomSize);
}
