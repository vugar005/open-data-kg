export interface User {
  id: string;
  account: Account;
  userName: string;
  name: string;
  surname: string;
  personId: string;
  patronymic?: any;
  birthdate: Date | String;
  photoFileId?: any;
  org: UserOrg;
  userType: string;
  gender: Gender;
  pin: string;
  sessionActive: boolean;
  isBlocked: boolean;
  modules: UserModule[];
  privilegeList: string[];
}

export interface UserModule {
  id: string;
  name: Name;
  shortName: Name;
  parentId?: any;
  orderBy: number;
  typeId?: any;
  iconPath?: any;
  code: string;
  operations: UserModuleOperation[];
}

export interface UserModuleOperation {
  id: string;
  typeId?: null | string | string;
  moduleId: string;
  permissionUrl?: string | string;
  urlCode?: any;
  code: string;
  name: Name;
}

interface Gender {
  id: string;
  parentId?: any;
  value: Name;
  aboutValue?: any;
  icon?: any;
  code?: any;
  type?: any;
}

export interface UserOrg {
  id: string;
  orgTypeId: string;
  name: Name;
  shortName: Name;
  formula: string;
  logo: Logo;
}

interface Logo {
  id?: any;
  path?: any;
  originalName?: any;
}

interface Name {
  kg: string;
  en: string;
  ru: string;
}

interface Account {
  id: string;
  username?: any;
  password?: any;
  role: Role;
  blocked: boolean;
  operations?: any;
}

interface Role {
  id: string;
  parentId?: any;
  value: Value;
  aboutValue?: any;
  icon?: any;
  code?: any;
  type?: any;
}

interface Value {
  kg: string;
  en?: any;
  ru?: any;
}
