import { toString } from '../string';

describe('toString', () => {

  it('should always return a string', () => {
    expect(typeof toString({})).toEqual('string');
  });

  it('should always return a string', () => {
    expect(typeof toString([])).toEqual('string');
  });

  it('should always return a string', () => {
    expect(typeof toString('string')).toEqual('string');
  });

  it('should always return a string', () => {
    expect(typeof toString(10)).toEqual('string');
  });

  it('should always return a string', () => {
    expect(typeof toString(null)).toEqual('string');
  });

  it('should always return a string', () => {
    expect(typeof toString(() => {
    })).toEqual('string');
  });

});
