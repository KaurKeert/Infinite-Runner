var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;
var xPos,yPos

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/boy.jpg");
  car2_img = loadImage("../images/boy1.jpg");
  car3_img = loadImage("../images/girl.jpg");
  car4_img = loadImage("../images/girl1.webp");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  xVel=0
  yVel=0
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
  if(gameState === 2){
    game.end();
  }
}
