var student = {
  name:"Sameen",
  class:7,
  favouriteSubject:"Math",
  marks:[95,94,97,100]
}

var ball = {
  x:20,
  y:20,
  r:30,
  xspeed:0,
  yspeed:0,
  colour:["red","blue","orange"]
}

function setup() {
  createCanvas(400, 400);
  console.log(student.name);
}

function draw() {
  background(220);
  circle(ball.x, ball.y, ball.r);
  fill(ball.colour[2]);
  ball.xspeed = 1;
  ball.x = ball.x + ball.xspeed;
}