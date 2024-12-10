import Square from '../square.js'
import Player from '../player.js'
import Piece from './piece.js'

export default class pawn extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let location = board.findPiece(this)

    // the list of valid moves
    let moves = []

    if (this.player === Player.WHITE) {
      // white pawns can move "up" by one
      moves.push(new Square(location.row + 1, location.col))
    } else {
      // black pawns can move "down" by one
      moves.push(new Square(location.row - 1, location.col))
    }

    

    return moves
  }
 
}
