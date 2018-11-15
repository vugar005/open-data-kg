  interface Value {
      kg: string;
      en?: any;
      ru?: any;
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

  interface Account {
      id: string;
      username?: any;
      password?: any;
      role: Role;
      blocked: boolean;
      operations?: any;
  }


  interface ShortName {
      kg: string;
      en: string;
      ru: string;
  }

  interface Org {
      id: string;
      orgTypeId: string;
      name: Value;
      shortName: ShortName;
      formula: string;
  }



  export interface UserModuleOperation {
      id: string;
      typeId: string;
      moduleId: string;
      permissionUrl: string;
      urlCode?: any;
      code: string;
      name: Value;
  }

  export interface UserModule {
      id: string;
      name: Value;
      shortName: Value;
      parentId?: any;
      orderBy: number;
      typeId?: any;
      iconPath?: any;
      code: string;
      operations: UserModuleOperation[];
  }

  export interface User {
      id: string;
      account: Account;
      userName: string;
      name: string;
      surname: string;
      patronymic: string;
      birthdate?: any;
      org: Org;
      userType: string;
      gender?: any;
      pin: string;
      sessionActive: boolean;
      isBlocked: boolean;
      modules: UserModule[];
      privilegeList: string[];
  }


