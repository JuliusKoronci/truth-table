import { toString } from './string';

/**
 * Convert an array of options into a hash table
 *
 * !we reverse the order to handle duplicates and get the first match
 *
 * @param {ConfigType} config
 * @returns {{exact: HashTablesType; leaf: HashTablesType}} - the hashtabes holding exact match
 * and leaf match
 */
export const createHashTable = (config: ConfigType) => {
  const hashTables: HashTablesType = {
    exact: {},
    leaf: {},
  };
  [...config].reverse().forEach((option) => {
    hashTables.exact[toString(option)] = option;
    hashTables.leaf[toString(option.slice(0, -1))] = option.slice(-1)[0];
  });

  return hashTables;
};

/**
 * Return a matched option or undefined
 *
 * @param {HashTableType} hashTable
 * @param {any[]} match
 * @returns {{}} - match or undefined
 */
export const getOrUndefined = (hashTable: HashTableType, match: any[]): {} | undefined => {
  return hashTable[toString(match)];
};

/**
 * Return a matched option or undefined
 * we consider here that the leaf can have obly 1 or to items out of many, in this case we want to
 * compare if the key starts with the match
 *
 * @param {ConfigType} config
 * @param {any[]} match
 * @returns {{}} - match or undefined
 */
export const getStartWithOrUndefined = (config: ConfigType, match: any[]): any => {
  const length = match.length;
  const compare = toString(match);
  const result = config.find((option: any[]) => {
    const optionAsString = toString(option.slice(0, length));
    return optionAsString === compare;
  });

  if (result !== undefined) {
    return [...result].pop();
  }

  return undefined;
};
