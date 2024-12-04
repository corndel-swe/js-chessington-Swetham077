import Square from '../square.js'
import Piece from './piece.js'

export default class Bishop {
  constructor(player) {
    this.player = player
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this);
    let moves = [];

    // Define the four diagonal directions
    const directions = [
        { row: 1, col: 1 },   // Top-right
        { row: 1, col: -1 },  // Top-left
        { row: -1, col: 1 },  // Bottom-right
        { row: -1, col: -1 }  // Bottom-left
    ];

    // Loop through each direction
    for (let direction of directions) {
        let row = location.row + direction.row;
        let col = location.col + direction.col;

        // Continue moving in the current direction
        while (row >= 0 && row < 8 && col >= 0 && col < 8) {
            let square = new Square(row, col);
            let piece = board.getPiece(square);

            if (board.isOccupied(square)) {
                if (board.getPiece(square).player !== this.player) {
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
