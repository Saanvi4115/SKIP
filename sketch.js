
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var roof;
var obj1, obj2, obj3, obj4, obj5;
var chain;

function setup() {
    Engine.update(engine);

	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/4,200,width,20);

	obj1 = new Ball(120,500,50);
	obj2 = new Ball(240,500,50);
	obj3 = new Ball(360,500,50);
	obj4 = new Ball(480,500,50);
	obj5 = new Ball(600,500,50);
	
	chain1 = new Chain(obj1.body,{x:200,y:100});
	chain2 = new Chain(obj2.body,{x:200,y:100});
  chain3 = new Chain(obj3.body,{x:200,y:100});
  chain4 = new Chain(obj4.body,{x:200,y:100});
  chain5 = new Chain(obj5.body,{x:200,y:100});

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(255);
  
  roof.display();
  obj1.display();
  obj2.display();
  obj3.display();
  obj4.display();
  obj5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}



