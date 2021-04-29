var fixedRect, movingRect;
var ball,bat,pen;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  ball = createSprite(200,100,50,50);
  bat = createSprite(500,100,50,50);
  pen = createSprite(700,100,50,50);
  
}

function draw() {
  background(0,0,0); 
  pen.x = World.mouseX;
  pen.y = World.mouseY; 
  isColliding(pen,bat);
  isColliding(pen,ball);
 
  drawSprites();
}
