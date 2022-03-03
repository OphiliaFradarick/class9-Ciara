//Global variables
var box;

function preload(){

}

function setup(){
  createCanvas(600, 400);

  //Creating a sprite
  box = createSprite(300, 196, 20, 20);
  box.shapeColor = "green";

}

function draw(){
  background("black");

  drawSprites();

}
