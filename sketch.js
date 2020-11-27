var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject,rope1,bobDiameter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var world,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)
	



	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	bobObject1 = new bob(300,230,50);
	bobObject2 = new bob(350,230,50);
	bobObject3 = new bob(400,230,50);
	bobObject4 = new bob(450,230,50);
	bobObject5 = new bob(500,230,50);
	constrainedRoofObject = new roof(400,30,250,20);
	rope1 = new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope2 = new rope(bobObject2.body,roofObject.body,-bobDiameter*2,0);
	rope3 = new rope(bobObject3.body,roofObject.body,-bobDiameter*2,0);
	rope4 = new rope(bobObject4.body,roofObject.body,-bobDiameter*2,0);
	rope5 = new rope(bobObject5.body,roofObject.body,-bobDiameter*2,0);
	

	

	var render = Render.create({
		element:document.body,
		engine:engine,
		width:1600,
		height:700,
		wireframes:false,




	});



	Engine.run(engine);
	Render.run(render);

	var options = {
		bodyA:bobObject1.body,
		bodyB:constrainedRoof1.body,
		length:10



	}

	var rope1 = constraint.create(options)
	World.add(world.rope)
  
}


function draw() {
  rectMode(CENTER);
  background("white");



  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  constrainedRoofObject.display();
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()


  

  


  
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:130,y:-145});

  
	}
}



