export const saveToLocalStorage = (key: any, value: any) => {
  return localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key: any) => {
  return localStorage?.getItem(key);
};

export const removeFromLocalStorage = (key: any) => {
  return localStorage.removeItem(key);
};
