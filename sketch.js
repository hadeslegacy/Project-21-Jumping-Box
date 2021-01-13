var canvas;
var music;
var box;
var surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite (100,550,100,10)  
    surface2=createSprite (300,550,100,10)  
    surface3=createSprite (500,550,100,10)  
    surface4=createSprite (700,550,100,10)  

    surface1.shapeColor = color(255,0,0)
    surface2.shapeColor = color(0,255,0)
    surface3.shapeColor = color(0,0,255)
    surface4.shapeColor = color(0,0,0)
    //create box sprite and give velocity
    box = createSprite (random(20,750),300,20,20)
    box.velocityX= random(1,6)
    box.velocityY= random(1,6)
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    if (box.isTouching(surface1)){
        box.shapeColor = color(255,0,0)
        box.bounceOff(surface1);
    }
    if (box.isTouching(surface2)){
        box.shapeColor = color(0,255,0)
        box.bounceOff(surface2);
        //playSound(music);
    }
    if (box.isTouching(surface3)){
        box.shapeColor = color(0,0,255)
        box.bounceOff(surface3);
        box.velocityX=0
        box.velocityY=0
    }
    if (box.isTouching(surface4)){
        box.shapeColor = color(0,0,0)
        box.bounceOff(surface4);
    }
    
    
    createEdgeSprite();
    drawSprites();
    //add condition to check if box touching surface and make it box
}

function createEdgeSprite () {
    RightEdge=createSprite(800,300,10,600)
    LeftEdge=createSprite(0,300,10,600)
    TopEdge=createSprite(400,600,800,10)
    BottomEdge=createSprite(400,0,800,10)

    if (box.isTouching(RightEdge)||box.isTouching(LeftEdge)){
        box.velocityX= box.velocityX * (-1);
    }
    if (box.isTouching(TopEdge)||box.isTouching(BottomEdge)){
        box.velocityY= box.velocityY * (-1);
    }
}
