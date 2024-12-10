import Square from '../square.js';
import King from './king.js';
import Piece from './piece.js';

export default class Rook extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this);
    let moves = [];

    const directions = [
      { row: 1, col: 0 },   // Up
      { row: -1, col: 0 },  // Down
      { row: 0, col: 1 },   // Right
      { row: 0, col: -1 }   // Left
    ];

    // Loop through each direction
    for (let direction of directions) {
      let row = location.row + direction.row;
      let col = location.col + direction.col;
    
      // Continue moving in the current direction
      while (row >= 0 && row < 8 && col >= 0 && col < 8) {
        let square = new Square(row, col);
        let piece = board.getPiece(square);
    
        if (piece) { // Check if there is a piece on the square
          if (piece.player !== this.player && !(piece instanceof King)) {
            moves.push(square); // Capture opponent's piece (but not the King)
          }
          break; // Stop if a piece is encountered
        } else {
          moves.push(square); // Add empty square as a valid move
        }
    
        row += direction.row;
        col += direction.col;
      }
    }


    return moves;
  }
}