var Tile = function () {
  this.status = "empty"
}

Tile.prototype.changeStatus = function(player) {
  if (this.status === "empty"){
    if(player.marker === "cross") {
      this.status = "cross"
    } else {
      this.status = "nought"
    }
  }
}

module.exports = Tile;
