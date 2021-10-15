var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "red"

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "blue"

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "orange"

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "pink"

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
  ball.shapeColor = "yellow"
  block1.shapeColor = "yellow"
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "yellow"
        block2.shapeColor = "yellow"
        music.play()
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "yellow"
        block3.shapeColor = "yellow"
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "yellow"
        block4.shapeColor = "yellow"
    }
  

    drawSprites();
}
all.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
