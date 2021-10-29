export interface Element {
  id?: number;
  name?: string;
  style?: Partial<Style>;
  values?: [
    {
      label: string;
      value: string;
    },
  ];
}

interface IObjectKeys {
  [key: string]: string | boolean;
}
export interface Style extends IObjectKeys {
  placeholder: string;
  width: string;
  height: string;
  required: boolean;
  border: string;
  fontSize: string;
  fontWeight: string;
  color: string;
  backgroundColor: string;
  label: string;
  value: string;
}
