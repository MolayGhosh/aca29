var bunny;  
var carrot;
var obs1;
var obs2;
var obs3;
var obs4;
var obs5;
var obs6;
var snakeGroup;
//(color pink is bunny while color orange is carrot.Brown Represents bricks.Blue represents snakes.)
function preload(){
  bunnyImage=loadImage("images/bunnyImg.png");
  carrotImage=loadImage("images/carrot.png");
  snakeImage=loadImage("images/snake.png");
  backgroundImage=loadImage("images/bg.png")
}
function setup(){
  createCanvas(600,600);
  edges = createEdgeSprites();
  bunny=createSprite(100,500,10,10);
  bunny.scale=0.3;
  bunny.addImage(bunnyImage);w
 carrot=createSprite(500,100,40,40);
  carrot.addImage(carrotImage)
 carrot.scale=0.3;
  obs1=createSprite(80,280,80,20);
  obs1.shapeColor="brown";
  obs2=createSprite(10,330,60,20);
  obs2.shapeColor="brown";
  obs3=createSprite(100,330,120,20);
  obs3.shapeColor="brown";
  obs4=createSprite(290,330,120,20);
  obs4.shapeColor="brown";
  obs5=createSprite(450,440,120,20);
  obs5.shapeColor="brown";
  obs6=createSprite(609,440,120,20);
  obs6.shapeColor="brown";
  obs7 = createSprite(225,440,120,20);
  obs7.shapeColor="brown";
  obs8 = createSprite(380,200,120,20);
  obs8.shapeColor="brown"; 
  obs9 = createSprite(520,280,120,20);
  obs9.shapeColor="brown";
 
snakeGroup= new Group();


}

function draw() {
  background(backgroundImage); 
   
  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
 obs2.bounceOff(edges[1]);
 if(keyDown("left"))
 bunny.x=bunny.x-4;
 if(keyDown("right"))
 bunny.x=bunny.x+4;
 if(keyDown("up"))
 bunny.y=bunny.y-4;
 if(keyDown("down"))
 bunny.y=bunny.y+4;
textSize(30)
if(bunny.isTouching(obs2))
 {
 text("YOU LOSE",300,300);
 bunny.x=100;
 bunny.y=500;
 }
 if(bunny.isTouching(obs1))
 {
 text("YOU LOSE",300,300);
 bunny.x=100;
 bunny.y=500;
 }
 if(bunny.isTouching(obs3))
 {
 text("YOU LOSE",300,300);
 bunny.x=100;
 bunny.y=500;
 }
 if(bunny.isTouching(obs4))
 {
 text("YOU LOSE",300,300);
 bunny.x=100;
 bunny.y=500;
 }
 if(bunny.isTouching(obs5))
 {
 text("YOU LOSE",300,300);
 bunny.x=100;
 bunny.y=500;
 }
 if(bunny.isTouching(obs6))
 {
 text("YOU LOSE",300,300);
 bunny.x=100;
 bunny.y=500;
 }
 if(bunny.isTouching(obs7))
 {
 text("YOU LOSE",300,300);
 bunny.x=100;
 bunny.y=500;
 }
 if(bunny.isTouching(obs8))
 {
 text("YOU LOSE",300,300);
 bunny.x=100;
 bunny.y=500;
 }
 if(bunny.isTouching(obs9)){
  text("YOU LOSE",300,300);
  bunny.x=100;
bunny.y=500;
}
if(bunny.isTouching(carrot)){
  text("YOU WIN !",300,300);

}
if(bunny.isTouching(snakeGroup)){
  text("YOU LOSE",300,300);
  bunny.x=100;
bunny.y=500;
}
 generateSnakes();
 for(var i=0; i<(snakeGroup).length;i++){
   var temp= (snakeGroup).get(i);
  if(bunny.isTouching(temp)){
    text("YOU LOSE",300,300);
  bunny.x=100;
bunny.y=500;
  }
 }

  drawSprites();

}
function generateSnakes(){
  if(frameCount% 30===0){
    console.log(frameCount);
    var snakes= createSprite(600,random(70,520),random(30,120),5);
    snakes.velocityX=random(-4,4);
    snakes.velocityY=random(-4,4);
    snakes.addImage(snakeImage);
    snakes.scale=random(0.2,0.5);
    snakeGroup.add(snakes)
  }
}