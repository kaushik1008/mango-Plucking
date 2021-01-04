
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree_img;

function preload()
{
tree_img=loadImage(tree.png);
boy_img=loadImage(boy.png);
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	ground = new Ground(750, 600, 1500, 20);
	boy = image(boy_img,350, 500, 300, 300);
	stone = new Stone(200, 350, 50, 50);
	tree = image(tree_img, 800, 200, 400, 400);
	ground = new Ground(400,height,800,40);
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  stone.display()
   boy.display()
  ground.display()
  drawSprites();
 
}



