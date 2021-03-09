const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;

function preload(){
backgroundImg = loadImage("images/bg.png");
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
 

  ground = new Ground(600,height,1200,20);
  offender1 = new Offender(810,350);
  offender2 = new Offender(810, 220);
  bomb = new Bomb(200,50);
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  ground.display();
  offender1.display();
  offender2.display();
  bomb.display();
  drawSprites();
}

function mouseDragged(){
    
  if(gameState !=="launched"){
      Matter.Body.setPosition(bomb.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  gameState = "launched";
  slingshot.fly();
}