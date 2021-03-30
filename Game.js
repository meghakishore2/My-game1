class Game {
    constructor(){

    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }

      update(state){
          database.ref('/').update({
              gameState: state
          });
      }

      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
              form = new Form()
              form.display();
              }

              jetski1 = createSprite(100,200);
              jetski1.addImage();
              jetski2 = createSprite(300,200);
              jetski2.addImage();
              jetski3 = createSprite(500,200);
              jetski3.addImage();
              jetski4 = createSprite(700,200);
              jetski4.addImage();
              jetskis = [jetski1, jetski2, jetski3, jetski4];         
      }

      play(){
          form.hide();

          player.getPlayerInfo();
          player.getJetskiAtEnd();

          if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=10
            player.update();
          }

          if(keyIsDown(LEFT_ARROW) && player.index !== null){
            player.position.x -=10
            player.update();
          }

          if(keyIsDown(RIGHT_ARROW) && player.index !== null){
            player.position.x +=10
            player.update();
          }

          if(keyIsDown(SPACE) && player.index !== null){
            player.position.y +=10
            player.update();
          }

          
      }

    }