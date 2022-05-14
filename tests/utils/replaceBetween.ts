export const replaceBetween = (
  startIndex: number,
  endIndex: number,
  original: string,
  insertion: string
) =>
  original.substring(0, startIndex) + insertion + original.substring(endIndex);
