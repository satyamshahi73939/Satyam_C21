
var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,1200);
 
 
  movingRect = createSprite(300, 200,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  gameObject1 = createSprite(300, 300,80,30);
  gameObject1.shapeColor = "yellow";

  gameObject2 = createSprite(400, 400,80,30);
  gameObject2.shapeColor = "yellow";

  gameObject3 = createSprite(500, 500,80,30);
  gameObject3.shapeColor = "yellow";

  gameObject4 = createSprite(600, 600,80,30);
  gameObject4.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(collisionTest(movingRect, gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else if(collisionTest(movingRect, gameObject2)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else if(collisionTest(movingRect, gameObject3)){
    movingRect.shapeColor = "red";
    gameObject3.shapeColor = "red";
  }
  else if(collisionTest(movingRect, gameObject4)){
    movingRect.shapeColor = "red";
    gameObject4.shapeColor = "red";
  }
  else if(collisionTest(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
    gameObject2.shapeColor = "green";
    gameObject3.shapeColor = "green";
    gameObject4.shapeColor = "green";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function collisionTest(o1, o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


