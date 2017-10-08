import { isValidArray } from '../validations';


describe('isValidArray', () => {
  it('should return true if not empty array passed in', () => {
    expect(isValidArray(['test'])).toBe(true);
  });
  it('should throw if empty array used', () => {
    expect(() => isValidArray([])).toThrow('Argument must be an array and can\'t be empty!');
  });
  it('should throw anything else than array passed in', () => {
    expect(() => isValidArray('string')).toThrow('Argument must be an array and can\'t be empty!');
  });
});
