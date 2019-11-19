// shortcuts:

// cut: ctrl x
// copy: ctrl c
// paste: ctrl v
// undo: ctrl z
// redo: shift+ctrl x
// paste multiple lines: ctrl c then ctrl v on same line
// highlight and move text
// save file: ctrl s
// select next: ctrl d
// comment: ctrl /
// Why use pairs () {} "" ?

// Why use comment?
// Why comment out code?

// Christmas Tree Code

let snowflakes = []; // array to hold snowflake objects
let lights = [];

function setup() {
  createCanvas(800, 550);
  fill(240);
  slider = createSlider(0, 100, 0, 1);
  slider.position(5, height);
  slider.style("width", "750px");
  noStroke();
}

function draw() {
  background("black");

  let t = frameCount / 60; // update time
  let snowCover = slider.value();
  // create a random number of snowflakes each frame
  for (let i = 0; i < random(snowCover); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

  triangle(
    width / 2,
    height - height / 2,
    width / 3,
    height - 40,
    width / 1.5,
    height - 40
  );

  triangle(
    width / 2,
    height - height / 1.2,
    width / 3,
    height - 100,
    width / 1.5,
    height - 100
  );

  triangle(
    width / 2,
    height - height / 1.1,
    width / 3,
    height - 150,
    width / 1.5,
    height - 150
  );

  rect(width / 2 - 15, height - 40, 30, 40);
  if (mouseIsPressed) {
    lightTree();
  } else {
    lights = [];
  }
}

function lightTree() {
  for (let i = 0; i < random(5); i++) {
    lights.push(new light());
  }
  for (let x of lights) {
    x.display();
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

function light() {
  this.y = random(100, 500);
  this.x = random(380 - this.y / 5, 440 + this.y / 5);
  this.d = random(25);

  this.display = function() {
    circle(this.x, this.y, this.d);
  };
}

//// ****** CHALLENGE 1 ******** //////

// challenge:

// Make snow white, tree green, and lights to randomly change color.

// super challenge:

// Change tree shape, add texture
// make snow bigger, change speed of snowfall

// super duper challenge:

// make you own tree and decorations with array and class

// Race Game
// Show project, break down if statements

// setup to draw background and show characters
//

// start game after 5 seconds, show counter
// show two scores and game countdown timer, 60 seconds
// if s show L sprite and if D show right sprite. Hurdle X - 1
// if A or F show jump sprite and y + 10 for one second
