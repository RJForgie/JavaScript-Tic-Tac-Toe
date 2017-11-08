var Tile = require("../tile.js");
var Board = require("../board.js");
var Player = require("../player.js")
var Game = require("../game.js")
var assert = require("assert")

describe("Board", function () {
  var game;
  var board;
  var tile;
  var player1;
  var player2;

  beforeEach(function () {
    game = new Game()
    board = new Board()
    tile = new Tile()
    player1 = new Player("cross")
    player2 = new Player("nought")

  });

  xit("should start with no tiles", function() {
    assert.strictEqual(0, board.tiles.length)
  });

  xit("should populate board with 9 tiles", function() {
    board.addTiles(9)
    assert.strictEqual(9, board.tiles.length)
  });

  xit("should start empty", function() {
    assert.strictEqual("empty", tile.status)
  });

  xit("should be able to change state of tile", function() {
    tile.changeStatus(player1)
    assert.strictEqual("cross", tile.status)
  });

  xit("should start with no winner", function() {
    game.addPlayer(player1)
    game.addPlayer(player2)
    assert.strictEqual(null, board.detectWinner(player1))
  })

  it("should be able to decide winner", function() {
    game.addPlayer(player1)
    game.addPlayer(player2)
    board.addTiles(9, tile)
    board.tiles[0].changeStatus(player1)
    board.tiles[1].changeStatus(player1)
    board.tiles[2].changeStatus(player1)
    assert.strictEqual(true, board.detectWinner(player1))
  })

})
