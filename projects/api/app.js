function setup() {
  createCanvas(1600, 1000);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255,0,255);
  }
  ellipse(mouseX, mouseY, 180, 180);
}
