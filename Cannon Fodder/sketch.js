const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    body = new Tanker(200, 390);
    cannon = new head(200, 365, 45);

    floor = new ground(600, 400, 1400, 20)

}

function draw(){
    background("red");
    Engine.update(engine);

    body.display();
    cannon.display();
    floor.display();
    
}
//function keyReleased() {
    // Call the shoot method for the cannon.
//}