import { sumar2NumerosConCallback } from './callback';

describe('sumar2NumerosConCallback', () => {
  it('should invoke the callback with the sum of two numbers', (done) => {
    const callback = (result: number) => {
      expect(result).toBe(6);
      done();
    };
    sumar2NumerosConCallback(2, 4, callback);
  });

  it('should invoke the callback with the sum of two negative numbers', (done) => {
    const callback = (result: number) => {
      expect(result).toBe(-15);
      done();
    };
    sumar2NumerosConCallback(-5, -10, callback);
  });

  it('should invoke the callback with the sum of a positive and a negative number', (done) => {
    const callback = (result: number) => {
      expect(result).toBe(4);
      done();
    };
    sumar2NumerosConCallback(8, -4, callback);
  });
});