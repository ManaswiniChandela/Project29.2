const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var holder,ball,ground;
var stand1,stand2;
var slingshot;
var polygon_img;
//var b1,b2,b3,b4,b5,b6,b7,b8,b9;

function preload(){
  polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(450,390,900,20);
  stand1 = new Ground(390,300,250,10);
  //stand2 = new Ground(700,200,200,10);
     
  //line 1
  /*b1 = new Box(640,175,30,40);
  b2 = new Box(670,175,30,40);
  b3 = new Box(700,175,30,40);
  b4 = new Box(730,175,30,40);
  b5 = new Box(760,175,30,40);
  //line 2
  b6 = new Box(670,135,30,40);
  b7 = new Box(700,135,30,40);
  b8 = new Box(730,135,30,40);
  //line 3
  b9 = new Box(700,95,30,40);*/

  b1 = new Box(330,235,30,40);
  b2 = new Box(360,235,30,40);
  b3 = new Box(390,235,30,40);
  b4 = new Box(420,235,30,40);
  b5 = new Box(450,235,30,40);

  b6 = new Box(360,195,30,40);
  b7 = new Box(390,195,30,40);
  b8 = new Box(420,195,30,40);

  b9 = new Box(390,155,30,40);
  
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingshot = new SlingShot(this.ball,{x :100 ,y :200});
    
  }
  
function draw() {
  background(56,44,44); 

  //Engine.update(engine); 
  //drawSprites();
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("pink");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  fill("gold");
  imageMode(CENTER)
  image(polygon_img, ball.positon.x, ball.positon.y, 40, 40);

  slingshot.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}