var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var UFOs, UFO1, UFO2, UFO3, UFO4, astroid;
var spaceImg, UFO1_Img, UFO2_Img, UFO3_Img, UFO4_Img, astroid_Img;

function preload(){
spaceImg = loadImage("../images/SpaceBackground.png");
UFO1_Img = loadImage("../images/UFOs.png");
UFO2_Img = loadImage("../images/UFOs-2.png");
UFO3_Img = loadImage("../images/UFOs-3.png");
UFO4_Img = loadImage("../images/UFOs-4.png");
astroid_Img = loadImage("../images/astroid.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
if(gameState === 2){
  game.end();
}
