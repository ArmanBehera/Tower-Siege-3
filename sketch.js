const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand1, stand2;

// Creating block for the 1st stand
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block25;

// Creating blocks for the 2nd stand
var block16, block17, block18, block19, block20;
var block21, block22, block23;
var block24;

// Creating a variable that destroys the bricks
var brickBreaker, brickBreakerImage;
var chain;   // Constraint created to tie the brickbreaker to a point

// Creating a score variable that stores the score
var score = 0;

// Introducing game states
var gameState = "sling";

// var bg, backgroundImg;

function preload(){

  // assigning the image of the brick breaker to a variable
  brickBreakerImage = loadImage("polygon.png");
}

function setup() {
  createCanvas(1000, 400);

  engine = Engine.create();
  world = engine.world;

  // Creating a ground
  ground = new Ground(width / 2, 350, 1000, 20);

  // Creating the brickbreaker
  brickBreaker = Bodies.circle(150, 250, 25);

  // My changes
  // Creating a chain
  chain = new SlingShot(this.brickBreaker, {x : 100 ,y : 250});

  // Creating the stands for holding the boxes
  stand1 = new Ground(400, 250, 250, 10);
  stand2 = new Ground(800, 150, 150, 10);

  // Creating blocks for the first stand
  block1 = new Block(490, 220, 30, 40);
  block2 = new Block(460, 220, 30, 40);
  block3 = new Block(430, 220, 30, 40);
  block4 = new Block(400, 220, 30, 40);
  block5 = new Block(370, 220, 30, 40);
  block6 = new Block(340, 220, 30, 40);
  block7 = new Block(310, 220, 30, 40);

  // Level 2 of 1st stand
  block8 = new Block(460, 190, 30, 40);
  block9 = new Block(430,190, 30, 40);
  block10 = new Block(400, 190, 30, 40);
  block11 = new Block(370, 190, 30, 40);
  block12 = new Block(340, 190, 30, 40);

  // Level 3 of 1st stand
  block13 = new Block(430, 140, 30, 40);
  block14 = new Block(400, 140, 30, 40);
  block15 = new Block(370, 140, 30, 40);

  // Level 4 of 1st stand
  block25 = new Block(400, 100, 30, 40);

  // Creating blocks for the second stand
  block16 = new Block(840, 120, 20, 30);
  block17 = new Block(820, 120, 20, 30);
  block18 = new Block(800, 120, 20, 30);
  block19 = new Block(780, 120, 20, 30);
  block20 = new Block(760, 120, 20, 30);

  // 2nd level of 2nd stand
  block21 = new Block(820, 90, 20, 30);
  block22 = new Block(800, 90, 20, 30);
  block23 = new Block(780, 90, 20, 30);

  // 3rd level of 3rd stand
  block24 = new Block(800, 60, 20, 30);

  World.add(world, brickBreaker);

}

function draw() {
  
    background("brown");

  // console.log(brickBreaker);

  // Updating the engine 
  Engine.update(engine);

  // Displaying the ground
  ground.display();

  // Displaying the image
  imageMode(CENTER);
  image(brickBreakerImage, brickBreaker.position.x, brickBreaker.position.y, 50, 50);

  // Displaying the stands
  stand1.display();
  stand2.display();

  // Displaying blocks for the first stand
  block1.display(1);
  block2.display(1);
  block3.display(1);
  block4.display(1);
  block5.display(1);
  block6.display(1);
  block7.display(1);

  block8.display(2);
  block9.display(2);
  block10.display(2);
  block11.display(2);
  block12.display(2);

  block13.display(3);
  block14.display(3);
  block15.display(3);

  block25.display(4);
  // Displaying blocks for the second stand

  block16.display(2);
  block17.display(2);
  block18.display(2);
  block19.display(2);
  block20.display(2);

  block21.display(3);
  block22.display(3);
  block23.display(3);
  
  block24.display(4);

  // Updating the score
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
  block19.score();
  block20.score();

  block21.score();
  block22.score();
  block23.score();

  block24.score();
  block25.score();

  chain.display();

  textSize(15);
  textFont("Algerian");
  text("Score : "+score, 50, 50);
  text("Press Space Bar to get another chance to play.", 550, 300);
}

function mouseDragged(){

  if (gameState === "sling"){

    Matter.Body.setPosition(this.brickBreaker, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){

    chain.fly();
    gameState = "launched";
}

function keyPressed(){

  if (keyCode === 32){

    Matter.Body.setPosition(this.brickBreaker, {x : 100, y : 250});
    chain.attach(this.brickBreaker);
    gameState = "sling";
  }
}

/*async function getBackgroundImg(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour  = datetime.slice(11, 13);

  if (hour >= 0600 && hour <= 1800){
    // Morning image
    bg = "DayImg.jpg";
  }

  else{
    // Night Image
    bg = "NightImg.jpg";
  }

  backgroundImg = loadImage(bg);
}*/