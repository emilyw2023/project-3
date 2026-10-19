function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background(220);
  background ('cadetblue');
  ellipse( 100, 100, 50, 50);
  circle(width/2, height/2, 100);
  circle(mouseX, mouseY, 150);
}