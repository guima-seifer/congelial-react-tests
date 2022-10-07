// The Fibonacci Sequence is the series of numbers:

/* 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ...

The next number is found by adding up the two numbers before it:

    the 2 is found by adding the two numbers before it (1+1),
    the 3 is found by adding the two numbers before it (1+2),
    the 5 is (2+3),
    and so on!
 */

import { Fibonacci } from './fibonacci'

test('Returns 1 for the first 2 numbers', () => {

    // actual and expected are defined like this by convetion
    const actualFirst = Fibonacci(0)
    const actualSecond = Fibonacci(1)

    const expected = 1
    expect(actualFirst).toEqual(expected)
    expect(actualSecond).toEqual(expected)
})

test('Returns the sum of the previous 2 numbers for n>1', () =>{
    const actualThird = Fibonacci(2)
    const actualTenth = Fibonacci(9)

    const expectedThird = 2
    const expectedTenth = 55

    expect(actualThird).toEqual(expectedThird)
    expect(actualTenth).toEqual(expectedTenth)
})