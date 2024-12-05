// const localStorageHelper = {};

const set = (key, value) => {
  if (typeof value == "object") {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
  return;
};
const localStorageHelper = { set };

localStorageHelper.get = (key) => {
  let value;
  value = localStorage.getItem(key);
  if (value && typeof JSON.parse(value) == "object") {
    value = JSON.parse(value);
  }
  return value;
};

export default localStorageHelper;
