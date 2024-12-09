import { strict as assert } from 'assert';
import { Rectangle } from '../exercises/rectangles.js';

describe('Rectangle', () => {
    it('should return the correct area', () => {
       
        const rect = new Rectangle(5, 10);
       
        const result = rect.area();

        assert.strictEqual(result, 50);
    });

    it('should return the correct perimeter', () => {
     
        const rect = new Rectangle(5, 10);

        const result = rect.perimeter();

        assert.strictEqual(result, 30);
    });
});
