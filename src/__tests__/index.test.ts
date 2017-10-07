import { Test } from '../index';

describe('Test', () => {
  it('should create a new object with argument', () => {
    expect(() => {
      new Test('test');
    }).not.toThrow();
  });
  it('should thow if no argument', () => {
    expect(() => {
      new Test();
    }).not.toThrow();
  });
});
