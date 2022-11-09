

let w = 1200;
let h = 700;
let randomX, randomY, randomSize;

function setup() {
  createCanvas(w,h);
  background ("grey");
  fill(200,40);
  stroke(200,10);
  strokeWeight(10);
}

function draw() {
  circle(mouseX, mouseY, 20);
  if (frameCount % 1 == 0) randomX = random(-55,55);
  if (frameCount % 1 == 0) randomY = random(-55,55);
  if (frameCount % 10 == 0) randomSize = random(30,70);
  circle(mouseX+randomX, mouseY+randomY , randomSize);

  

  let x = mouseX;
  let y = mouseY;

  let ix = width - mouseX;  // Inverse X
  let iy = height - mouseY; // Inverse Y
  
  fill(20, 150);
  ellipse(x, height/2, y, y);
  
  fill(0, 159);
  ellipse(ix, height/2, iy, iy);

  if (keyIsPressed === true) {
    fill(100);
  } else {
    fill(10);
  }
  
}

