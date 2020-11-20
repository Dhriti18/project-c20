 var car,wall;
 var speed,weight;  
   
   function setup() {
  createCanvas(900,400);

  wall=createSprite(880,200,60,height/2);
  wall.shapeColour="grey";
  car=createSprite(10,200,40,40);
  car.shapeColor="white";
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
  
}

function draw() {
  background("black");
  
  if(wall.x-car.x<wall.width/2+ car.width/2){
      car.velocityX=0;
     var deformation= 0.5* weight *speed * speed/22509;
     if(deformation>180){
car.shapeColor=colour(255,0,0);
     }
     if(deformation<100){
      car.shapeColor=colour(0,255,0);
           }

           if(deformation<180 && deformation>100){
            car.shapeColor=colour(230,230,0);
                 }

    }
  drawSprites();
}
