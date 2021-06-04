class Game {
  constructor(){}

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
    UFO1 = createSprite(100, 200);
    UFO1.addImage("UFO1", UFO1_Img);
    UFO2 = createSprite(300, 200);
    UFO2.addImage("UFO2", UFO2_Img);
    UFO3 = createSprite(500, 200);
    UFO3.addImage("UFO3", UFO3_Img);
    UFO4 = createSprite(700, 200);
    UFO4.addImage("UFO4", UFO4_Img);

    astroid = createSprite(50, 50, 20, 20);
    astroid.x = Math.round(random(15, 150));
    astroid.y = Math.round(random(15, 150));


    UFOs = [UFO1, UFO2, UFO3, UFO4];
  }

  play(){
    form.hide()
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 0;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;

        UFOs[index-1].x = x;
        UFOs[index-1].y = y;

        if (index === player.index){
          //UFOs[index-1].shapeColor = 'red';
          stroke(10);
          fill('red');
          ellipse(x, y, 90, 90);
          camera.position.x = displayWidht/2;
          camera.position.y = UFOs[index-1].y;
        }
      }
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    drawSprites();
  }
}
