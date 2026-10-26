function setup() {
  createCanvas(1000, 800);
  background(220);
  background ('cadetblue');
}

function draw(){
  fill('brown');
  noStroke();
  rect(375, 300, 250, 300);
  arc(375, 500, 70, 70, HALF_PI, PI + HALF_PI);
  arc(375, 560, 70, 70, HALF_PI, PI + HALF_PI);
  arc(625, 500, 70, 70, -HALF_PI, HALF_PI);
  arc(625, 560, 70, 70, -HALF_PI, HALF_PI);
  stroke(0);
  fill('bisque');
  circle(500, 400, 260);
  arc(500, 450, 150, 100, 0, PI);
  fill('white')
  circle(455, 380, 52);
  circle(545, 380, 52);
  fill('green');
  circle(455, 380, 28);
  circle(545, 380, 28);
  fill('brown');
}
