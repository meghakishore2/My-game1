var jetski1, jetski2, jetski3, jetski4
var treasure, obstacle, coin, ground, inivisbleGround
var database
jetski = [jetski1, jetski2, jetski3, jetski4]



function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(255,255,255);

  if(playerCount === 4){
    game.update(1); 

  if(gamestate===1){
    clear();
    game,play();
  }

  if(gamestate===2){
    game.end();
  }
  //create ground
var ground = createSprite(200,380,800,40 );
ground.setAnimation("ground2");
ground.x = ground.width /2;


var invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;

//make scoring
var count = jetski.isTouching(coin);
text("Score:" + count);

//conditions for winning or losing
if(jetski.isTouching(treasure) && coin >= 100){
  background(0,255,0);
  displayText(player.name + "has won!")
}

if(jetski.isTouching(treasure) && coin < 100){
background(255,0,0);
displayText("You lost! You must have 100 or more coins to win.")
}
  drawsprites()
}



//create obstacles
function spawnObstacles(){
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = -6;
  }
   
    var rand = Math.round(randomNumber(1,6));
    obstacle.setAnimation("obstacles1" + rand);
    obstacle.lifetime = 70;

    if(jetski.isTouching(obstacle)){
      background(255,0,0);
      displayText("You lost!")
    }

  }
}