export const validateString = (value: unknown, maxLength: number) => {
  if (
    value === null ||
    value === undefined ||
    typeof value !== "string" ||
    value.length > maxLength
  ) {
    return false;
  }
  return true;
};
