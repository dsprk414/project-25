
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var bin1;
var bin2;
var bin3;







function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	
	
	bin1 = new Bin(650,655,190,20);
  
	paper1=new Paper(50,500,70)
	ground1=new Ground(400,665,800,10)
	
	
	

	Engine.run(engine);
	
	
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bin1.display();
 
 
  paper1.display();
  ground1.display();

  drawSprites();
 
}



function keyPressed(){
	
	if(keyCode=== UP_ARROW){

   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:165,y:-305});








	}


}






