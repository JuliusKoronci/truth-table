import { exampleTruthTable } from '../../test-data/hashTable.data';
import { getStartWithOrUndefined, getOrUndefined, createHashTable } from '../common';


const hashTable = createHashTable(exampleTruthTable);

describe('hash table utils', () => {
  describe('getStartWithOrUndefined', () => {
    it('should return undefined if no macth', () => {
      expect(getStartWithOrUndefined(exampleTruthTable, ['blabla'])).toBeFalsy();
    });
    it('should return first match with multiple args', () => {
      expect(getStartWithOrUndefined(exampleTruthTable, [true, false])).toEqual('value1');
    });
    it('should return first match with single args', () => {
      expect(getStartWithOrUndefined(exampleTruthTable, [true])).toEqual('value1');
    });
  });
  describe('getOrUndefined', () => {
    it('should return first match', () => {
      expect(getOrUndefined(hashTable.leaf, ['blabla'])).toBeFalsy();
      expect(getOrUndefined(hashTable.leaf, [true])).toBeFalsy();
    });
    it('should return undefined if no macth', () => {
      expect(getOrUndefined(hashTable.leaf, [true, false])).toEqual('value1');
      expect(getOrUndefined(hashTable.leaf, [true, true])).toEqual('value2');
    });
  });
  describe('createHashTable', () => {
    it('should create an object with coresponding keys', () => {
      expect(createHashTable(exampleTruthTable)).toEqual({
        exact: {
          '[false,false,"value4"]': [false, false, 'value4'],
          '[false,true,"value3"]': [false, true, 'value3'],
          '[false,true,"value5"]': [false, true, 'value5'],
          '[true,false,"value1"]': [true, false, 'value1'],
          '[true,true,"value2"]': [true, true, 'value2'],
        },
        leaf: {
          '[false,false]': 'value4',
          '[false,true]': 'value3',
          '[true,false]': 'value1',
          '[true,true]': 'value2',
        },
      });
    });
  });
});
