// teach shortcuts:

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
// tidy code: shift + tab

// Why use comment?
// Why comment out code?

// Christmas Tree Code

let snowflakes = []; // array to hold snowflake objects
let lights = [];
// let img

// function preload() {
//   img = loadImage('tree.jpeg');
// }

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

class light {
  constructor() {
    this.y = random(100, 500);
    this.x = random(380 - this.y / 5, 440 + this.y / 5);
    this.d = random(25);
  }

  display() {
    circle(this.x, this.y, this.d);
  }
}

//// ****** CHALLENGE 1 ******** //////

// challenge:

// Make snow white, tree green, and lights to randomly change color.
// What is a class? Why use? How use?
// What is an array? What is javascript object?
// What are the arrays in below code holding?

// super challenge:

// Change tree shape, add star on top
// make snow bigger, change speed of snowfall, make snow direction random

// super duper challenge:

// make you own tree and decorations with array and class

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// two player shoot game

// variables for p1 score, p2 score, p1 y, p2 y, array of p1 bullets, array p2 bullets
// draw triangle on left and right side. y changes, x always stays same
// controls:  p1 q:up, a:down  , z:shoot ----- p2 p:up, l:down, ,:shoot
// bullets class
// when shoot button pressed, create new bullet in corresponding array, update, and draw
// if p1 bullets hit p2, p1 score ++1 and vice versa

////  // ********* CHALLENGE *******   /////////

// Make right player change color when hit

// What is a class? Why use? How use?
// What is an array? What is javascript object?
// What are the arrays in below code holding?

//// Insane Challenge //////////

/// Change code to allow both players to also move left and right.

// Make your own game, copy parts of code if you need to. The most important part is understanding // what the code does.

//////////// UNCOMMENT GAME CODE BELOW ///////////////
//////////// UNCOMMENT GAME CODE BELOW ///////////////
//////////// UNCOMMENT GAME CODE BELOW ///////////////
//////////// UNCOMMENT GAME CODE BELOW ///////////////

// let p1Score = 0
// let p2Score = 0
// let p1Y = 250
// let p2Y = 250
// let playerSpeed = 20
// let p1Bullets = []
// let p2Bullets = []
// let bulletSpeed = 20
// let p1Hit = false
// let p2Hit = false
// let instructions = true

// function setup() {
//   createCanvas(800, 600);
//   noStroke();
// }

// function draw() {
//   fill("black")
//   background(220);
//   if (instructions) {
//     displayInstructions()
//   }
//   displayScore();
//   if (p1Hit) {
//     fill("red")
//   } else {
//     fill("white")
//   }
//   triangle(5, 40 + p1Y, 5, 80 + p1Y, 35, p1Y + 60)
//   p1Hit = false
//   fill("white")
//   triangle(795, 40 + p2Y, 795, 80 + p2Y, 760, 60 + p2Y)

//   // handleKey()
//   for (let bullet of p1Bullets) {
//     bullet.p1Shoot();
//     bullet.display();

//   }
//   for (let bullet of p2Bullets) {
//     bullet.p2Shoot()
//     bullet.display();
//   }

// }

// function displayScore() {
//   textSize(20);
//   text(`score: ${p1Score}`, 10, 30);
//   text(`score: ${p2Score}`, 700, 30);
// }

// function displayInstructions() {
//   textSize(20);
//   text("CONTROLS:", 300, 200)
//   text("Left Player:", 150, 250)
//   text("q : move up", 150, 300)
//   text("a : move down", 150, 330)
//   text("z : pew pew", 150, 360)

//   text("Right Player:", 500, 250)
//   text("p : move up", 500, 300)
//   text("l : move down", 500, 330)
//   text(", : pew pew", 500, 360)

// }

// // function handleKey() {
// //   if (keyIsDown(81)) {
// //     p1Y = p1Y - playerSpeed
// //   } else if (keyIsDown(65)) {
// //     {
// //       p1Y = p1Y + playerSpeed
// //     }
// //   } else if (keyIsDown(90)) {
// //     {
// //       p1Bullets.push(new bullet(35, 60 + p1Y))
// //     }
// //   } else if (keyIsDown(80)) {
// //     {
// //       p2Y = p2Y - playerSpeed
// //     }
// //   } else if (keyIsDown(76)) {
// //     {
// //       p2Y = p2Y + playerSpeed
// //     }
// //   } else if (keyIsDown(188)) {
// //     {
// //       p2Bullets.push(new bullet(760, 60 + p2Y))
// //     }
// //   }
// // }

// function keyPressed() {
//   if (keyCode === 81) {
//     p1Y = p1Y - playerSpeed
//   } else if (keyCode === 65) {
//     p1Y = p1Y + playerSpeed

//   } else if (keyCode === 90) {
//     {
//       instructions = false
//       p1Bullets.push(new bullet(35, 60 + p1Y))
//     }
//   } else if (keyCode === 80) {
//     {
//       p2Y = p2Y - playerSpeed
//     }
//   } else if (keyCode === 76) {
//     {
//       p2Y = p2Y + playerSpeed
//     }
//   } else if (keyCode === 188) {
//     {

//       instructions = false
//       p2Bullets.push(new bullet(760, 60 + p2Y))
//     }
//   }
// }

// function keyTyped() {
//   if (key === "q") {
//     p1Y = p1Y - playerSpeed
//   } else if (key === "a") {
//     p1Y = p1Y + playerSpeed
//   }
// }

// class bullet {
//   constructor(x, y) {
//     this.y = y
//     this.x = x
//     this.d = random(25)
//   }

//   display() {
//     circle(this.x, this.y, this.d)
//   }

//   p1Shoot() {
//     this.x = this.x + 1 * bulletSpeed
//     let d = dist(this.x, this.y, 760, 60 + p2Y)
//     if (d < 15) {
//       p1Score = p1Score + 1

//     }
//   }

//   p2Shoot() {
//     // p1Hit=false
//     this.x = this.x - 1 * bulletSpeed
//     let d = dist(this.x, this.y, 35, 60 + p1Y)
//     if (d < 15) {
//       p2Score = p2Score + 1
//       p1Hit = true
//     }
//   }

// }
