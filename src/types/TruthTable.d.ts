type ConfigType = any[][];

interface TruthTableInterface {
  config: ConfigType;
  hashTables: HashTablesType;

  getExactMatch(match: any[]): {} | undefined;

  getMatch(match: any[]): any[] | undefined;

  getAllMatches(match: any[]): any[];

  getLastLeafOfMatch(match: any[]): any;
}
