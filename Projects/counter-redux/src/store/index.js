import { createStore } from "redux";

const INITIAL_STORE = {
  counterValue: 0,
  privacy: false,
};

const reducer = (store = INITIAL_STORE, action) => {
  if (action.type === "ADD") {
    store = { ...store, counterValue: store.counterValue + 1 };
    return store;
  } else if (action.type === "SUBSTRACT") {
    store = { ...store, counterValue: store.counterValue - 1 };
    return store;
  } else if (action.type === "INPUT_NUMBER") {
    store = {
      ...store,
      counterValue: store.counterValue + Number(action.payload.number),
    };
    return store;
  } else if (action.type === "PRIVACY") {
    store = { ...store, privacy: !store.privacy };
    return store;
  }
  return store;
};

const appStore = createStore(reducer);

export default appStore;