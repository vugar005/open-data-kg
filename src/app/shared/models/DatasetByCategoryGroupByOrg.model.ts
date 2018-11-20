export interface DatasetByCategoryGroupByOrg {
  kv: Kv;
  tbl: Tbl[];
  err: any[];
}

interface Tbl {
  r: R[];
  startLimit: string;
  c: C[];
  endLimit: string;
  tn: string;
  rowCount: number;
  hiddenColumn: string;
  seqColumn: string;
}

interface C {
  categoryEn?: string;
  t: string;
  i: string;
  n: string;
  createUserId?: string;
  updateDate?: string;
  orgShortNameEn?: string;
  orgId?: string;
  datasetNameEn?: string;
  datasetFullname?: string;
  orgRu?: string;
  datasetId?: string;
  orgShortName?: string;
  id?: string;
  datasetDescriptionRu?: string;
  createDate?: string;
  datasetRating?: string;
  orgFormula?: string;
  datasetNameKg?: string;
  datasetDescription?: string;
  updateUserId?: string;
  org?: string;
  categoryRu?: string;
  orgShortNameRu?: string;
  datasetName?: string;
  active?: string;
  allFormat?: string;
  datasetReviewCount?: string;
  orgKg?: string;
  datasetDescriptionEn?: string;
  datasetNameRu?: string;
  datasetDescriptionKg?: string;
  category?: string;
  orgEn?: string;
  categoryKg?: string;
  categoryId?: string;
  orgShortNameKg?: string;
}

interface R {
  categoryEn: string;
  createUserId: string;
  updateDate: string;
  orgShortNameEn: string;
  orgId: string;
  datasetNameEn: string;
  datasetFullname: string;
  orgRu: string;
  datasetId: string;
  orgShortName: string;
  id: string;
  datasetDescriptionRu: string;
  createDate: string;
  datasetRating: string;
  orgFormula: string;
  datasetNameKg: string;
  datasetDescription: string;
  updateUserId: string;
  org: string;
  categoryRu: string;
  orgShortNameRu: string;
  datasetName: string;
  active: string;
  allFormat: string;
  datasetReviewCount: string;
  orgKg: string;
  datasetDescriptionEn: string;
  datasetNameRu: string;
  datasetDescriptionKg: string;
  category: string;
  orgEn: string;
  categoryKg: string;
  categoryId: string;
  orgShortNameKg: string;
}

interface Kv {
}
