
    interface Value {
      kg: string;
      en?: any;
      ru?: any;
  }

  interface Role {
      id: number;
      parentId?: any;
      value: Value;
      aboutValue?: any;
      icon?: any;
      code?: any;
      type?: any;
  }

   interface Account {
      id: number;
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


  interface UserModuleOperation {
      id: number;
      typeId: number;
      moduleId: number;
      permissionUrl: string;
      urlCode?: any;
      code: string;
      name: Value;
  }

  export interface UserModule {
      id: number;
      name: Value;
      shortName: ShortName;
      parentId: number;
      orderBy: number;
      typeId: number;
      iconPath?: any;
      code: string;
      operations: UserModuleOperation[];
  }

  export interface User {
      id: number;
      account: Account;
      userName: string;
      name: string;
      surname: string;
      patronymic: string;
      birthdate?: any;
      gender?: any;
      pin: string;
      sessionActive: boolean;
      isBlocked: boolean;
      modules: UserModule[];
      privilegeList: string[];
  }
