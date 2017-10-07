import { isValidArray } from './utils/validations';
import { toString } from './utils/string';

class TruthTable implements TruthTableInterface {
  config: ConfigType;

  /**
   * We need to pass in our array which represents the truth table we want to search in
   *
   * @param {ConfigType} config
   */
  constructor(config: ConfigType) {
    isValidArray(config);

    this.config = config;
  }

  /**
   * Search for an exact match in the truth table
   *
   * @param {any[]} configItem
   * @returns {T} the match or undefined
   */
  getExactMatch = (configItem: any[]) => {
    isValidArray(configItem);
    const compare = toString(configItem);
    return this.config.find((item => toString(item) === compare));
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
    const compare = toString(configItem);
    const length = configItem.length;

    const item = this.config.find(((item) => {
      const itemToString = toString(item.slice(0, length));

      return itemToString === compare;
    }));
    if (Array.isArray(item)) {
      return item.slice(-1)[0];
    }

    return item;
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
