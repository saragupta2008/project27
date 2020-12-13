
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roof;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new Bob(200,600,100);
	bobObject2= new Bob(300,600,100);
	bobObject3= new Bob(400,600,100);
	bobObject4= new Bob(500,600,100);
	bobObject5= new Bob(600,600,100);
	roof = new Roof(width/2,100,width,20);
	rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  roof.display();
  drawSprites();
 
}



