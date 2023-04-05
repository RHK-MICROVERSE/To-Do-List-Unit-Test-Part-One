const mokingLocalStorage = () => {
  let localStorage = {};

  return {
    getItem(key) {
      return localStorage[key];
    },

    setItem(key, value) {
      localStorage[key] = value;
    },

    clear() {
      localStorage = {};
    },

    removeItem(key) {
      delete localStorage[key];
    },

    getAll() {
      return localStorage || {};
    },
  };
};

Object.defineProperty(window, 'taskLocalStorage', { value: mokingLocalStorage });
