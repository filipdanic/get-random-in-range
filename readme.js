/**
 * get-random-in-range
 * --------------
 *
 * Get a random integer in range via curried function that
 * makes it easy to apply defaults to your random number generators.
 *
 * `npm install get-random-in-range`
 *  or
 * `yarn add get-random-in-range`
 *
 * Simple example:
 * randomInRange()()() // => immediately returns a number between 0 and 100
 *
 * Use currying to apply defaults:
 * const randomGenerator = randomInRange(-100)(100);
 * // somewhere else
 * randomGenerator() // => returns a number between -100 and 100
 *
 */

/**
 *
 * @param {number=} min
 * @return {function(number=): function(): number}
 */
const randomInRange = (min = 0) => (max = 100) => () =>
  Math.floor(Math.random() * (max - min)) + min;

module.exports = randomInRange;
