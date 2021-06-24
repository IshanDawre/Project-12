var path;
var Runner , Runner_running;
var boundary , invisibleBoundaries1 , invisibleBoundaries2;

function preload(){
  //pre-load images
  
  path.loadImage("path.png");
  
  Runner = loadAnimation("Runner-1.png","Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,100,100);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  Runner = createSprite(200,200,50,50);
  Runner.addImage(RunnerImg);
  Runner.addAnimation("RunnerImg");

  invisibleBoundaries1 = createSprite(350,200,50,400);
  invisibleBoundaries1.visible = false;

  invisibleBoundaries2 = createSprite(0,200,50,400);
  invisibleBoundaries2.visible = false;

  Runner.collide(invisibleBoundaries1);
  Runner.collide(invisibleBoundaries2);
}

function draw() {
  background(0);
  if(path.y > 400 ){
    path.y = height/2;
  }

     if(keyDown(right)){
       Runner.velocityX = 2;
     }

     if(keyDown(left)){
       Runner.velocityX = -2;
     }
   drawSprites();
   
}
