/**
 * We use this function to throw an error if someone passes an invalid argument to the truth table.
 * This is meant to stop the developer from using the library in a bad way and provide him more
 * insight for what happened.
 *
 * @param {[any]} arg
 *
 * @returns {boolean} true if argument is a valid array
 *
 * @throws {Error} - Argument must be an array and can't be empty!
 */
const isValidArray = (arg: any[]) => {
  if (!Array.isArray(arg) || arg.length === 0) {
    throw new Error('Argument must be an array and can\'t be empty!');
  }
  return true;
};
export { isValidArray };
