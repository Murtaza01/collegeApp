export const currentLang = localStorage.getItem("i18nextLng");

const stateStorage = localStorage.getItem("persist:root");
export const authStorage = JSON.parse(stateStorage);
