const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint= Matter.MouseConstraint
const Mouse=Matter.Mouse




var ground
var division
var divisions=[];
var plinkos=[];
var particles=[];
var divisionHeight=300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  for(var k=0;k<=width ;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for (var j = 20; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,50));
  }

  for (var j = 40; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,135));
  }

   for (var j = 20; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,220));
  }

   for (var j =40; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,305));
  }






  ground=new Ground(200,800,800,20)
  division=new Division(200,600,20,700)
  
  
}


function draw() {
  background(0); 
  Engine.update(engine);
  if (frameCount % 90 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

 
  
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  
  for (var k = 0; k < divisions.length; k++) {
      
    divisions[k].display();
  }
  
 

    for (var i = 0; i < plinkos.length; i++) {
      
      plinkos[i].display();
      
    }



  ground.display();
  


  
  
}
