export const arrayAllEqual = (arr: unknown[]) => {
  const arraySet = new Set(arr);

  return arraySet.size === 1 && !arraySet.has(null);
}
