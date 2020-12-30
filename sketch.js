//making constants
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//variables

var engine, world;
var ground1


function setup(){
    createCanvas(900,400)
    engine = Engine.create();
    world = engine.world;
    ground1=new Ground(width/2,height-50,width,20)
}
function draw(){

    background(0)
    Engine.update(engine)
    ground1.display();
}