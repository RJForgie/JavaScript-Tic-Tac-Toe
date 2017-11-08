var Game = function(){
  this.players = [];
  this.currentPlayer = null;
}

Game.prototype.addPlayer = function(player) {
  this.players.push(player)
  if (this.players.length === 1) {
    this.currentPlayer = player
  }
}

Game.prototype.switchPlayer = function() {
  if(this.currentPlayer === this.players[0]){
    this.currentPlayer = this.players[1]
  } else {
    this.currentPlayer = this.players[0]
  }
}

Game.prototype.decideWinner = function(player) {

}



module.exports = Game
