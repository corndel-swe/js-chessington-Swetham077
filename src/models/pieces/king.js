import Square from '../square.js';
import Piece from './piece.js';

export default class King {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this);
    let moves = [];

    const directions = [
      { row: 1, col: 0 },   // Up
      { row: -1, col: 0 },  // Down
      { row: 0, col: 1 },   // Right
      { row: 0, col: -1 },  // Left
      { row: 1, col: 1 },   // Up-right
      { row: 1, col: -1 },  // Up-left
      { row: -1, col: 1 },  // Down-right
      { row: -1, col: -1 }  // Down-left
    ];

       // Loop through each direction
       for (let direction of directions) {
        let row = location.row + direction.row;
        let col = location.col + direction.col;

        // Continue moving in the current direction
        if (row >= 0 && row < 8 && col >= 0 && col < 8) {
            let square = new Square(row, col);
            let piece = board.getPiece(square);

            if (piece) { // Check if there is a piece on the square
                if (piece.player !== this.player) {
                    moves.push(square); // Capture opponent's piece
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

moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this);
    board.movePiece(currentSquare, newSquare);
}
}
 