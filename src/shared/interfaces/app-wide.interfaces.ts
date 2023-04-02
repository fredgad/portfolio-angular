export interface ResponseErrorListItemPropsI {
  Class: string;
  Data: any[] | any;
  Code: string;
  Message: string;
  Description: string;
  Type: string;
}

export interface ErrorList {
  errorList: ResponseErrorListItemPropsI[];
}

export interface CubeStatePropsI {
  data: {
    CubePositions: string[];
  };
}
