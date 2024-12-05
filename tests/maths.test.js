import { Maths } from '../exercises/maths.js';
import { strict as assert } from 'assert';

describe('Maths', () => {
    it('should be equal to 3.14', () => {
        assert.equal(Maths.PI, 3.14);
      });
    });
  
describe('Maths', () => {
    it ('should return the same number when given a whole number', () => {

        const wholeNumber = 5;
        const result = Maths.round(wholeNumber);
        assert.strictEqual(result, wholeNumber);
    });
});