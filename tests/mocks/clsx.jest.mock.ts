export type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;

export interface ClassDictionary {
  [id: string]: boolean;
}

export type ClassArray = Array<ClassValue>;

const clsxJestMock = (...classes: ClassValue[]) => classes.join(' ');

export default clsxJestMock;
