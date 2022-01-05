const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var points = [
  { x: 400, y: 200 },
  { x: 600, y: 50 },
  { x: 650, y: 300},
  { x: 800, y: 180}
];

function preload(){
  bgImg = loadImage("assets/background.png");
  playerImg = loadImage("./assets/player1.png");
}

function setup() {
  createCanvas(850, 400);
  engine = Engine.create();
  world = engine.world;

  player = new Player(100, 200, 30, 30, playerImg);
  // Create a sling object here.
  
 
}

function draw() {
  background(bgImg);
  Engine.update(engine);

  player.display();
  // Display sling object here.
  
  for(var i=0; i< points.length; i++){
    drawPoints(i);
  }

  
}

function drawPoints(i) {
  push();
  stroke("#fff9c4");
  strokeWeight(3);
  ellipseMode(RADIUS);
  fill("#4527a0");
  ellipse(points[i].x, points[i].y, 10, 10);
  pop();
}

// define the mouseDragged() function here


