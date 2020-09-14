const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg = "images/light.jpg"
var backgroundImg;

var score = 0;

function preload() {
  hexagonimg = loadImage("images/sprite_0.png");
  getBackgroundImage();

}


function setup() {

createCanvas(1000,500);

engine = Engine.create();
world = engine.world;

 

  base = new Ground(400, 350, 200, 20);
  base1 = new Ground(700, 200, 200, 20);
  block1 = new Box(340, 325, 30, 30);
  block2 = new Box(370, 325, 30, 30);
  block3 = new Box(400, 325, 30, 30);
  block4 = new Box(430, 325, 30, 30);
  block5 = new Box(460, 325, 30, 30);
  block6 = new Box(370, 295, 30, 30);
  block7 = new Box(400, 295, 30, 30);
  block8 = new Box(430, 295, 30, 30);
  block9 = new Box(400, 265, 30, 30);
  block10 = new Box(640, 175, 30, 30);
  block11 = new Box(670, 175, 30, 30);
  block12 = new Box(700, 175, 30, 30);
  block13 = new Box(730, 175, 30, 30);
  block14 = new Box(760, 175, 30, 30);
  block15 = new Box(670, 145, 30, 30);
  block16 = new Box(700, 145, 30, 30);
  block17 = new Box(730, 145, 30, 30);
  block18 = new Box(700, 115, 30, 30);

  hexagon = Bodies.circle(300, 200, 30, 30);
  World.add(world, hexagon);

  slingshot = new SlingShot(this.hexagon, {x:100, y:200});

  //wall.debug = true;
  //car.debug = true;

}

//var car, wall;
//var speed, weight;

function draw() {
  if(backgroundImg) 
  background(backgroundImg);  
  textSize(20);
  fill("black");
  text("Score:" + score, 300, 30);

  Engine.update(engine);

  base.display();
  base1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  

  imageMode(CENTER);
  image(hexagonimg, hexagon.position.x, hexagon.position.y, 30, 30);

  slingshot.display();



}

function mouseDragged() {

  Matter.Body.setPosition(this.hexagon, {x: mouseX, y:mouseY});

}

function mouseReleased() {
  slingshot.fly();
  
}

function keyPressed() {
  if(keyCode == 32) {
    Matter.Body.setPosition(this.hexagon, {x:100, y:200})
    slingshot.attach(this.hexagon);
  }
}

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  //console.log(hour);

  if (hour >= 06 && hour <= 18) {
    bg = "images/light.jpg";
  } else {
    bg = "images/dark.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}


