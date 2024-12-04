import Square from '../square.js'
import Piece from './piece.js'

export default class King {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {

    let location = board.findPiece(this)
    let moves = [] 

     // Define the all directions (1 move)
     const directions = [
      { row: 1, col: 1 },   // Top-right
      { row: 1, col: -1 },  // Top-left
      { row: -1, col: 1 },  // Bottom-right
      { row: -1, col: -1 },  // Bottom-left
      { row: 1, col: 0 },   // top
      { row: }
     ]




    return moves


  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this)
    board.movePiece(currentSquare, newSquare)
  }
}
