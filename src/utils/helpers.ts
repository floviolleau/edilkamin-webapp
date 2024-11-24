const fireplaceRegex = /^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/ig;

const isValidFireplace = (fireplace: string) => fireplaceRegex.test(fireplace);

const tokenLocalStorageKey = 'edilkamin-token';
// const deviceInfosLocalStorageKey = 'edilkamin-device-infos';

const getTokenLocalStorage = (): string | null =>
  global.localStorage.getItem(tokenLocalStorageKey);

const setTokenLocalStorage = (token: string): void =>
  global.localStorage.setItem(tokenLocalStorageKey, token);

const removeTokenLocalStorage = (): void =>
  global.localStorage.removeItem(tokenLocalStorageKey);

export {
  isValidFireplace,
  getTokenLocalStorage,
  setTokenLocalStorage,
  removeTokenLocalStorage,
};
