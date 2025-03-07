export const arrayAllEqual = (arr: (number | null | undefined)[] | undefined) => {
  if (!arr) {
    return;
  }

  const arraySet = new Set(arr);

  return arraySet.size === 1 && !arraySet.has(null);
}
