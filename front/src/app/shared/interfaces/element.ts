export interface Element {
  id?: number;
  name?: string;
  style?: Style;
  values?: {
    option?: string;
  };
}

interface IObjectKeys {
  [key: string]: string | boolean | undefined;
}
export interface Style extends IObjectKeys {
  placeholder?: string;
  width?: string;
  height?: string;
  required?: boolean;
  border?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  backgroundColor?: string;
  label?: string;
}
