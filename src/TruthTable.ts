import { isValidArray } from './utils/validations';
import { toString } from './utils/string';

class TruthTable implements TruthTableInterface {
  config: ConfigType;

  constructor(config: ConfigType) {
    isValidArray(config);

    this.config = config;
  }

  getExactMatch = (configItem: any[]) => {
    isValidArray(configItem);
    const compare = toString(configItem);
    return this.config.find((item => toString(item) === compare));
  }

  getMatch = (configItem: any[]) => {
    isValidArray(configItem);
    const compare = toString(configItem);
    const length = configItem.length;

    return this.config.find(((item) => {
      const itemToString = toString(item.slice(0, length));
      return itemToString === compare;
    }));
  }

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
