var Tile = require("../tile.js");
var Board = require("../board.js");
var Player = require("../player.js")
var Game = require("../game.js")
var assert = require("assert")

describe("Game", function () {
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

  it("should start with no players", function() {
    assert.strictEqual(0, game.players.length)
  });

  it("should be able to add players", function() {
    game.addPlayer(player1)
    assert.strictEqual(1, game.players.length)
  });

  it("should start on first player", function() {
    game.addPlayer(player1)
    game.addPlayer(player2)
    assert.strictEqual("cross", game.currentPlayer.marker)
  });



})
