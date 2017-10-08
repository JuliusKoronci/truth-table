import { asyncTruthTableFactory } from '../truth-table-async-factory';
import { exampleTruthTable } from '../test-data/hashTable.data';
import TruthTable from '../TruthTable';


describe('asyncTruthTableFactory', () => {
  it('should return a promise with valid config', () => {
    const tTableFromFactory = asyncTruthTableFactory(exampleTruthTable);
    expect(tTableFromFactory instanceof Promise).toBeTruthy();
  });
  it('should return a promise with invalid config', () => {
    const tTableFromFactory = asyncTruthTableFactory('test');
    expect(tTableFromFactory instanceof Promise).toBeTruthy();
  });
  it('should return a new TruthTable object', async () => {
    expect.assertions(1);
    const tTable = await asyncTruthTableFactory(exampleTruthTable);
    expect(tTable instanceof TruthTable).toBeTruthy();
  });
  it('should have an error if invalid config', async () => {
    expect.assertions(1);
    try {
      const tTable = await asyncTruthTableFactory('test');
    } catch (e) {
      expect(e.message).toEqual('Argument must be an array and can\'t be empty!');
    }
  });
});
