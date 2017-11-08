var Tile = require("./tile");

var Board = function () {
  this.tiles = []
}

Board.prototype.addTiles = function (numberOfTiles) {
  let i;
  for (i = 0; i < numberOfTiles; i++) {
    this.tiles.push(new Tile)
  }
}

Board.prototype.detectWinner = function(player) {
  console.log(this.tiles)
  var solutions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  var result = null

  for (let winState of solutions) {
    if (this.tiles[winState[0]].status === player.marker && this.tiles[winState[1]].status === player.marker && this.tiles[winState[2]].status === player.marker ) {
      result = player
      }
  }
  return result
}

module.exports = Board;
