var score = 0;
var circleSize = 160;
var circleX;
var circleY;
var time = 500;
var touchingBall = false;

function setup() {
  createCanvas(1000, 1000);
  textSize(20);
  startGame();
}

function startGame() {
  displayScore();
  circleX = random(circleSize, 700 - circleSize);
  circleY = random(circleSize, 700 - circleSize);
  strokeWeight(2);
  stroke(0, 0, 0);

  let cir = circle(circleX, circleY, circleSize);
  setTimeout(clear, time);
  setTimeout(startGame, time);
  touchingBall = false;
}

function displayScore() {
  textSize(20);
  text(`score: ${score}`, 10, 30);
}

function beep() {
  osc = new p5.Oscillator();
  osc.setType("square");
  osc.freq(240);
  osc.amp(0, 0.1);
  osc.start();
}

function mousePressed() {
  let d = dist(mouseX, mouseY, circleX, circleY);
  if (d < circleSize) {
    score = score + 1;
    beep();
    touchingBall = true;
  }
}
