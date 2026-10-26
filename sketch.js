function setup() {
  createCanvas(1000, 800);
  background(220);
  background ('cadetblue');
}

function draw(){
  fill('#3b2118');
  noStroke();
  rect(375, 300, 250, 300, 40);
  arc(410, 400, 150, 150, HALF_PI, PI + HALF_PI);
  arc(410, 525, 150, 150, HALF_PI, PI + HALF_PI);
  arc(600, 400, 150, 150, -HALF_PI, HALF_PI);
  arc(600, 525, 150, 150, -HALF_PI, HALF_PI);
  stroke(0);
  fill('bisque');
  circle(500, 400, 260);
  noStroke();
  fill('#3b2118');
  push();
  translate(465, 315);
  rotate(radians(145));
  arc(0, 0, 230, 160, 0, PI);
  pop();
  push();
  translate(535, 315);
  rotate(radians(-145));
  arc(0, 0, 230, 160, 0, PI);
  pop();
  stroke(0);
  fill('bisque');
  arc(500, 450, 150, 100, 0, PI);
  fill('white')
  circle(455, 380, 52);
  circle(545, 380, 52);
  fill('green');
  circle(455, 380, 28);
  circle(545, 380, 28);
  fill('#3b2118');
}
