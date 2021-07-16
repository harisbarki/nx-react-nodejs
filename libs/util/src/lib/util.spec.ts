import { findArrayMedian, findPrimes } from './util';

describe("#findPrimes", () => {
    
  test("it returns all the primes less than a given number", () => {
      expect(findPrimes(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])
  })
  
  test("it returns all the primes less than a small number", () => {
    expect(findPrimes(3)).toEqual([2])
  })

  test('it returns an error message if given a number less than three', () => {
    const errStr = 'Please enter an integer greater than two.';

    expect(() => {findPrimes(null)}).toThrow(errStr);
    expect(() => {findPrimes(undefined)}).toThrow(errStr);
    expect(() => {findPrimes(0)}).toThrow(errStr);
    expect(() => {findPrimes(-6)}).toThrow(errStr);
    expect(() => {findPrimes(1)}).toThrow(errStr);
    expect(() => {findPrimes(2)}).toThrow(errStr);
    expect(() => {findPrimes(2.786)}).toThrow(errStr);
    expect(() => {findPrimes('abcd' as any)}).toThrow(errStr);
  });

  test("it returns all primes less than a given large number", () => {
      expect(findPrimes(1000000)[78497]).toEqual(999983)
  })
})


describe("#findArrayMedian", () => {
    
  test("it returns median of an array", () => {
    expect(findArrayMedian([])).toEqual([])
    expect(findArrayMedian([2, 3])).toEqual([2, 3])
    expect(findArrayMedian([2, 3, 5])).toEqual([3])
    expect(findArrayMedian([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])).toEqual([41])
    expect(findArrayMedian([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101])).toEqual([41, 43])
  })
  
  test('it returns an error message if wrong input is given', () => {
    const errStr = 'No input array given!';
      expect(() => { findArrayMedian(null) }).toThrow(errStr);
      expect(() => { findArrayMedian(undefined) }).toThrow(errStr);
      expect(() => { findArrayMedian('abcd' as any) }).toThrow(errStr);
  });
})