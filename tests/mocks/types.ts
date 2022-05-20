export interface I18Next {
  t: (i18nKey: string, args?: object) => string;
  language?: string;
  changeLanguage: () => Promise<object>;
  use: () => I18Next;
  init: () => Promise<I18Next>;
}
