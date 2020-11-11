var canvas;
var database;
var playerCount;
var form;
var player,game;
var gameState = 0;
var allPlayers;

function setup(){
   canvas =  createCanvas(500,500);

database = firebase.database();
console.log(database);
  game = new Game
  game.getState()  
  game.start()

}

function draw(){
  if(playerCount===4){
    game.update(1)
  }

  if(gameState===1){
    clear ()
    game.play()
  }
}