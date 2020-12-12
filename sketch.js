var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);

  speed=random(55,90);
  weight=random(400,1500);
  wall=createSprite(800,200,60,height/2)
  car=createSprite(200,200,60,60)
  car.velocityX = speed
}

function draw() {
  background(255,255,255);
   if (wall.x-car.x<(car.width+wall.width)/2)
   {
     car.velocityX=0;
     var deformation=0.5 *width*speed* speed/22509
     if(deformation>180)
     {
       car.shapeColor=color(255,0,0)
     }
     if(deformation>180 && deformation>100)
    {
      car.shapeColor=color(230,230,0)
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0,0)
    }
    } 
  drawSprites();
}