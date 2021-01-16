
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;
var left,right,bottom;
function preload()
{
	
}

function setup() {
	createCanvas(1200,700);

	engine = Engine.create();
	world = engine.world;

	ground1=new Ground(600,680,1200,20);
	//World.add(myWorld, ground1);

	paper1= new Paper(400,600,40,40);
	//World.add(myWorld, paper1);

	left=new Ground(800,655,20,50);
	bottom=new Ground(850,675,100,20);
	right=new Ground(900,655,20,50);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  //Engine.update(engine)
	paper1.display();
	ground1.display();
	fill("white")
	left.display();
	right.display();
	bottom.display();
}
function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:80, y:-20})
	}

}



