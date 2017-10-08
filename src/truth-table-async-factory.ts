import TruthTable from './TruthTable';

/**
 * Sometimes, when the config is too large, we don't want blocking operations and we rather deal
 * with the Truth Table in an async way.
 *
 * @param {ConfigType} config
 * @returns {Promise<TruthTable>} - promise which returns a new TruthTable object
 */
export const asyncTruthTableFactory = (config: ConfigType) => {
  return new Promise<TruthTable>((resolve, reject) => {
    try {
      const tTable = new TruthTable(config);
      resolve(tTable);
    } catch (e) {
      reject(e);
    }
  });
};
