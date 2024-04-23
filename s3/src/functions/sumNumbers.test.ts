import { functionSum2Numbers } from './sumNumbers';

describe('functionSum2Numbers', () => {
  it('should return the sum of two numbers', () => {
    const result = functionSum2Numbers(2, 4);
    expect(result).toBe(6);
  });

  it('should return the sum of two negative numbers', () => {
    const result = functionSum2Numbers(-5, -10);
    expect(result).toBe(-15);
  });

  it('should return the sum of a positive and a negative number', () => {
    const result = functionSum2Numbers(8, -4);
    expect(result).toBe(4);
  });
});