export interface TableModel {
  err: string;
  kv: Object;
  tbl: Tbl[];
}
interface Tbl {
  c:  any;
  endLimit: string;
  hiddenColumn: string;
  r: any;
  rowCount: number;
  seqColumn: string;
  startLimit: string;
  tn?: string;
}
// interface C {
//   i: "categoryEn"
//   n: "categoryEn"
//   t: "STRING"
// }
