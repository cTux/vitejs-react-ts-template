import { replaceBetween } from './replaceBetween';

export const t = (i18nKey: string, args?: object) => {
  let key = i18nKey;

  while (key.includes('{{')) {
    const startIndex = key.indexOf('{{');
    const endIndex = key.indexOf('}}');
    const currentArg = key.substring(startIndex + 2, endIndex);
    const value = args[currentArg];

    key = replaceBetween(startIndex, endIndex + 2, key, value);
  }

  return key;
};
