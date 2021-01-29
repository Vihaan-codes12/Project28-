
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5;
var mango6, mango7, mango8;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(975,50,30);
	mango3 = new mango(980,125,30);
	mango4 = new mango(1020,145,30);
	mango5 = new mango(1140,120,30);
	mango6 = new mango(950,175,30);
	mango7 = new mango(1050,180,30);
	mango8 = new mango(1150,200,30);


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  textSize(25);
  text("Press Space to get another chance to play!!",50,50);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display(); 
  mango7.display();
  mango8.display();

  

  groundObject.display();
}
