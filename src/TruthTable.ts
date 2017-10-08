import { isValidArray } from './utils/validations';
import { toString } from './utils/string';
import { createHashTable, getOrUndefined, getStartWithOrUndefined } from './utils/common';

class TruthTable implements TruthTableInterface {
  config: ConfigType;
  hashTables: HashTablesType;

  /**
   * We need to pass in our array which represents the truth table we want to search in
   *
   * @param {ConfigType} config
   */
  constructor(config: ConfigType) {
    isValidArray(config);

    this.config = config;
    this.hashTables = createHashTable(config);
  }


  /**
   * Search for an exact match in the truth table
   *
   * @param {any[]} configItem
   * @returns {T} the match or undefined
   */
  getExactMatch = (configItem: any[]) => {
    isValidArray(configItem);

    return getOrUndefined(this.hashTables.exact, configItem);
  }

  /**
   * Search for the first match in the truth table
   *
   * We don't need to provide the entire option here. It will return the first option based on
   * partial comparison
   *
   * @param {any[]} configItem
   * @returns {T} the match or undefined
   */
  getMatch = (configItem: any[]) => {
    isValidArray(configItem);
    const compare = toString(configItem);
    const length = configItem.length;

    return this.config.find(((item) => {
      const itemToString = toString(item.slice(0, length));
      return itemToString === compare;
    }));
  }

  /**
   * This is the same as getMatch with the only difference that it will return the last item in the
   * match instead of the match
   * @param {any[]} configItem
   * @returns {any} undefined or last leaf
   */
  getLastLeafOfMatch = (configItem: any[]): any => {
    isValidArray(configItem);
    let match = getOrUndefined(this.hashTables.leaf, configItem);
    if (match === undefined) {
      match = getStartWithOrUndefined(this.config, configItem);
    }
    return match;
  }

  /**
   * Find all matches based on an exact or partial match
   *
   * @param {any[]} configItem
   * @returns {any[]} the match or empty array
   */
  getAllMatches = (configItem: any[]): any[] => {
    isValidArray(configItem);
    const compare = toString(configItem);
    const length = configItem.length;

    return this.config.filter(((item) => {
      const itemToString = toString(item.slice(0, length));

      return itemToString === compare;
    }));
  }
}

export default TruthTable;
