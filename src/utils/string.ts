/**
 * Just convert any value for comparison
 *
 * @param {*} arg - can be anything except undefined
 * @returns {string}
 */
export const toString = (arg: any): string => {
  if (typeof arg === 'function') {
    return arg.toString();
  }
  return JSON.stringify(arg);
};
