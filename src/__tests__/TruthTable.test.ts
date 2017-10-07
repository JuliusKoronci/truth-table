import TruthTable from '../TruthTable';

const exampleTruthTable = [
  [true, false, 'value1'],
  [true, true, 'value2'],
  [false, true, 'value3'],
  [false, false, 'value4'],
  [false, true, 'value5'],
];

const tTable = new TruthTable(exampleTruthTable);

describe('TruthTable', () => {
  it('should be defined', () => {
    expect(TruthTable).toBeDefined();
  });

  describe('getExactMatch', () => {
    it('should return the entered item', () => {
      expect(tTable.getExactMatch([true, true, 'value2'])).toEqual([true, true, 'value2']);
    });
    it('should return undefined if no match', () => {
      expect(tTable.getExactMatch([true, true, 'value9'])).toBe(undefined);
    });
  });

  describe('getMatch', () => {
    it('should return first match', () => {
      expect(tTable.getMatch([true, true])).toEqual([true, true, 'value2']);
    });
    it('should return undefined if no match', () => {
      expect(tTable.getMatch([true, 'value9'])).toBe(undefined);
    });
  });

  describe('getAllMatches', () => {
    it('should return first match', () => {
      expect(tTable.getAllMatches([false, true]).length).toEqual(2);
    });
    it('should return undefined if no match', () => {
      expect(tTable.getAllMatches([true, 'value9']).length).toEqual(0);
    });
  });


  describe('getLastLeafOfMatch', () => {
    it('should return first match', () => {
      expect(tTable.getLastLeafOfMatch([false, true])).toEqual('value3');
    });
    it('should return undefined if no match', () => {
      expect(tTable.getLastLeafOfMatch([true, 'value9'])).toEqual(undefined);
    });
  });

});
