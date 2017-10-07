export const toString = (arg: any): string => {
  if (typeof arg === 'function') {
    return arg.toString();
  }
  return JSON.stringify(arg);
};
