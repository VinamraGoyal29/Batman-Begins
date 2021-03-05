const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drops = [];
var maxDrops = 100;
var umbrella;
var thunder1, thunder2, thunder3, thunder4;
var rand;
var thunder;
var thunderCount;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(400, 700)
    engine = Engine.create();
	world = engine.world;

    umbrella = new Umbrella(200, 500);

    if(frameCount % 100 == 0){
        for(var i = 0; i < maxDrops; i++){
            drops.push(new Drop(random(0,400, random(0,400))));
        }
    }
    

    Engine.run(engine);
}

function draw(){
    Engine.update(engine);
    background("black");

    umbrella.display();
    for(var i = 0; i < maxDrops; i++){
        drops[i].show();
        drops[i].updateY();
    }

    rand = Math.round(random(1,4));
    if(frameCount % 70 == 0){
        thunderCount = frameCount;
    thunder = createSprite(random(20,380), random(10, 30));
    switch(rand){
        case 1 : thunder.addImage(thunder1)
        break;
        case 2 : thunder.addImage(thunder2)
        break;
        case 3 : thunder.addImage(thunder3)
        break;
        case 4 : thunder.addImage(thunder4)
        break;
    }
    thunder.scale = random(0.3,0.6)
    }

    if(thunderCount + 20 === frameCount && thunder){
        thunder.destroy();
    }

drawSprites();
}   

