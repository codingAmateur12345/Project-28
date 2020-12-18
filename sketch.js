
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, ground, stone;

function preload()
{

	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = new Tree(600,250,550,550);

	ground = new Earth(600,790,1200,20);

	stone = new Rock(1000,700,50);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  tree.display();

  ground.display();

  stone.display();
  
  drawSprites();
 
}



