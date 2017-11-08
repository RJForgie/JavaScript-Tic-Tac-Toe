import React from "react"

const Grid = (props) => {

  const grid = props.board.tiles.map((tile, index) => {
    return (
      <div key={index} className="grid-tiles" onClick={
        (e) => {
          tile.changeStatus(props.game.currentPlayer)
          props.updateTiles(tile, index)
        }
      }>
        <p>{tile.status}</p>
      </div>
    )
  })

  return (
    <div className="board">
      {grid}
    </div>
  )

}

export default Grid
