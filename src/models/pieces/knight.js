import Square from '../square.js';
import King from './king.js';
import Piece from './piece.js';

export default class knight extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this);
    let moves = [];

    const directions = [
      { row: 2, col: 1 },   // Up-right
      { row: 2, col: -1 },  // Up-left
      { row: -2, col: 1 },  // Down-right
      { row: -2, col: -1 }, // Down-left
      { row: 1, col: 2 },   // Right-up
      { row: 1, col: -2 },  // Right-down
      { row: -1, col: 2 },  // Left-up
      { row: -1, col: -2 }  // Left-down
    ];

    // Loop through each direction
    for (let direction of directions) {
      let row = location.row + direction.row;
      let col = location.col + direction.col;

      // Check if the move is within the board boundaries
      if (row >= 0 && row < 8 && col >= 0 && col < 8) {
        let square = new Square(row, col);
        let piece = board.getPiece(square);

        if (piece) {
          if (piece.player !== this.player && !(piece instanceof King)){
            moves.push(square);
          }
          break;
        } else{
          moves.push(square);
        }
        
      }
    }

    return moves;
  }

 
}
