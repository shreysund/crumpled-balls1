
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

	paper1= new Paper(200,600,25,25);
	//World.add(myWorld, paper1);

	left=new Ground(740,635,20,100);
	bottom=new Ground(850,675,200,20);
	right=new Ground(940,635,20,100);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  //Engine.update(engine)
	paper1.display();
	fill("brown")
	ground1.display();
	fill("white")
	left.display();
	right.display();
	bottom.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:60, y:-40})
	}

}



