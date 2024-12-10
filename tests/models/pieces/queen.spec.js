import { strict as assert } from 'assert';
import Queen from '../../../src/models/pieces/queen.js';
import Player from '../../../src/models/player.js';
import Square from '../../../src/models/square.js';
import Board from '../../../src/models/board.js';

describe('Queen', () => {
  let board;
  beforeEach(() => (board = new Board()));

  it('can make queen moves', () => {
    const queen = new Queen(Player.WHITE);
    board.setPiece(new Square(3, 4), queen);
    const moves = queen.getAvailableMoves(board);

    const expectedMoves = [
      // Up
      new Square(2, 4), new Square(1, 4), new Square(0, 4),
      // Down
      new Square(4, 4), new Square(5, 4), new Square(6, 4), new Square(7, 4),
      // Left
      new Square(3, 3), new Square(3, 2), new Square(3, 1), new Square(3, 0),
      // Right
      new Square(3, 5), new Square(3, 6), new Square(3, 7),
      // Up-right
      new Square(2, 5), new Square(1, 6), new Square(0, 7),
      // Up-left
      new Square(2, 3), new Square(1, 2), new Square(0, 1),
      // Down-right
      new Square(4, 5), new Square(5, 6), new Square(6, 7),
      // Down-left
      new Square(4, 3), new Square(5, 2), new Square(6, 1), new Square(7, 0)
    ];

    assert.deepEqual(new Set(moves), new Set(expectedMoves));
  });
});