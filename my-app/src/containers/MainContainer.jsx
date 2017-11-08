import React from "react";
import Board from "../models/board.js"
import Grid from "../components/Grid.jsx"
import Player from "../models/player.js"
import Game from "../models/game.js"

class MainContainer extends React.Component {

  constructor(props) {
    super(props)
    const board = new Board()
    const player1 = new Player("cross")
    const player2 = new Player("nought")
    const game = new Game()
    board.addTiles(9)
    game.addPlayer(player1)
    game.addPlayer(player2)

    this.state = {
      board: board,
      game: game
    }
    this.updateTiles = this.updateTiles.bind(this)
  }

  updateTiles(tile, index) {
    const board = this.state.board
    const game = this.state.game
    const newTiles = board.tiles
    newTiles[index].status = tile.status
    board.tiles = newTiles
    game.switchPlayer()
    this.setState({"board": board})
    this.setState({"game": game})
    const player1Result = board.detectWinner(game.players[0])
    const player2Result = board.detectWinner(game.players[1])
    console.log("player1Result", player1Result)
    console.log("player2Result", player2Result)
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Grid board={this.state.board} game={this.state.game} updateTiles={this.updateTiles} />
      </div>
    )
  }

}

export default MainContainer
