export const isNil = (data: any): boolean => {
  if (data == null) {
    return true;
  }
  if (Array.isArray(data) && data.length === 0) {
    return true;
  }
  if (typeof data === 'number' && data === 0) {
    return true;
  }
  return false;
};
