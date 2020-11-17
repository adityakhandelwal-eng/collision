var bullet,wall,speed,weight,thickness
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
bullet=createSprite(100,200,50,150);
bullet.velocityX=speed;
thickness=random(22,83);
wall=createSprite(1200,200,thickness,height/2)
wall.shapeColor=color(80,80,80)
speed=random(223,321);
weight=random(30,52);
}


function draw() {
  background(255,255,255);
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
}
var damage=0.5*weight*speed*speed/thickness*thickness*thickness
if (damage<10){
  wall.shapeColor="green"
}
if (damage>10){
  wall.shapeColor="blue"
}

  drawSprites();
}
function hasCollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}