var wall, thickness;
var bullet, speed, weight;

function setup() 
{
  createCanvas(1200,400);

  wall = createSprite(1000, 200, thickness, height/2); 
  thickness = random(22, 83);
  
  bullet = createSprite(50, 200, 70, 10);
  speed = random(10, 15);
  weight = random(30, 52);
}

function draw() 
{  
  background(0);

  bullet.shapeColor = "white";
  wall.shapeColor = color(80, 80, 80); 

  bullet.velocityX = speed; 

  if(hasCollided(bullet, wall)) 
  {
     var damage = 0.5 * weight * speed * speed/ (thickness * thickness * thickness);
     bullet.velocityX = 0;
  
     if(damage > 10)
     {
        wall.shapeColor = color(255, 0, 0);
     } 

     if(damage < 10)
     {
        wall.shapeColor = color(0, 255, 0);
     }
   }

   drawSprites();
}

function hasCollided(ob_1, ob_2)
{
   bulletRightEdge = ob_1.x + ob_1.width;
   wallLeftEdge = ob_2.x; 

   if(bulletRightEdge >= wallLeftEdge)
   {
      return true;
   }
   else
   {
      return false;
   }
}