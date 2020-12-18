var bullet,wall;
var speed,weight,thickness;
var background1,bg1_Img,background2,bg2_Img;
var bricks_Img;
var sound1;


function preload() {
bg1_Img = loadImage("Army1.jpg");
bg2_Img = loadImage("Army2.jpg");
sound1 = loadSound("backgroundm.m4a")

}

function setup() {
 createCanvas(1600,500);

 sound1.loop();

 background1 = createSprite(750,270);
 background1.addImage(bg1_Img);
 background1.visible = false;

 
 background2 = createSprite(750,270);
 background2.addImage(bg2_Img);
 background2.visible = false;
 background2.scale=0.4;

 
 speed =random(223,321);
 weight =random(30,52);
 thickness = random(22,83);

 bullet = createSprite(50,200,5,20);
 bullet.shapeColor = "white";
 bullet.velocityX = speed;

 wall = createSprite(1500,200,thickness,height/2);
 wall.shapeColor = color(153,153,153);






 


}

function draw() {
  background(0,0,51);

   
 
  if (hasCollided(bullet,wall)) {
     bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed/(thickness*thickness*thickness))
  
    if (damage>10) {
    wall.shapeColor = color(255,0,0);
    textFont("Georgia");
    fill("white");
    textSize(30);
    stroke("white");
    text("Oops! The material and thickness of this wall aren't strong enough to bear the force of the bullets!",160,40);
    background1.visible = true;
   }
  
    if (damage<10) {
    wall.shapeColor = color(0,255,0);
    textFont("Georgia");
    fill("white");
    textSize(30);
    stroke("white");
    text("Eureka! The material and thickness of this wall is strong enough to bear the force of the bullets!",160,35);
    background2.visible = true;
    }
    }
  
 
  drawSprites();
}

function hasCollided(bullet,wall) {
  bulletRightEdge = bullet.x+bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  return false;
}