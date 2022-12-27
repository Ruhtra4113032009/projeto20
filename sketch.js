
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var block1, block2, block3;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
    background("black");

	engine = Engine.create();
	world = engine.world;

	ground = createSprite(width/2, 750, windowWidth, 100);
	World.add(world, ground);
	var ground_options={
		isStatic : true
	}
	block1 = Bodies.rectangle(200, 50, 50, 100, block1_options);
	World.add(world, block1);
    var block1_options={
		restitution: 0.02,
		friction: 0.02,
		frictionair:0.1
	}
	block2 = Bodies.circle(500, 50, 50, block2_options);
	World.add(world, block2);
    var block2_options={
		restitution: 0.8,
		friction: 0.1,
		frictionair:0.01
	}
	Engine.run(engine);
}


function draw() {
  background("white");
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rect(block1.position.x, block1.position.y, 100, 50);
  ellipse(block2.position.x, block2.position.y, 50)
  Engine.update(engine);
  drawSprites();
 
}



