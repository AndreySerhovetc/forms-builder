export interface Element {
  id?: number,
  name?: string,
  style?: {
    placeholder?: string
    width?: string,
    height?: string,
    required?: boolean,
    border?: string,
    fontSize?: string,
    fontWeight?: string,
    color?: string
  }
}