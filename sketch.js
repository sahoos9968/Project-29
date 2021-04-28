
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand;
var block1, block2, block3, block4;
var block5, block6, block7;
var block8, block9, block10, block11;
var block12, block13, block14;

var avatar, slingshot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(0,400,1800,10);
    
    stand = new Ground(600,200,200,10);

    block5 = new Block(625,199,20,20);
    block6 = new Block(650,199,20,20);
    block7 = new Block(675,199,20,20);
    block1 = new Block(600,199,20,20);
    block2 = new Block(575,199,20,20);
    block3 = new Block(550,199,20,20);
    block4 = new Block(525,199,20,20);

    block8 = new Block(537,160,20,20);
    block9 = new Block(567,160,20,20);
    block10 = new Block(597,160,20,20);
    block11= new Block(627,160,20,20);

    block12= new Block(605,130,20,20);
    block13= new Block(575,130,20,20);
    block14= new Block(535,130,20,20);

    avatar = new Block(100,390,30,30);

    slingshot = new SlingShot(avatar.body, {x:100, y:300})
}

function draw(){
    background("white");
    Engine.update(engine);
        
    ground.display();
    stand.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();

    block12.display();
    block13.display();
    block14.display();

    avatar.display();

    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(avatar.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingshot.attatch(avatar.body);
    }
}