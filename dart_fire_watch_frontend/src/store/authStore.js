import {makeAutoObservable} from "mobx"

class AuthStore {
  isAuth = false;
  whoAmI = "";

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth = (auth) => {
    this.isAuth = auth;
  };

  getIsAuth = () => {
    return this.isAuth;
  };

  setWhoAmI = (whoAmI) => {
    this.whoAmI = whoAmI;
  };

  getWhoAmI = () => {
    return this.whoAmI;
  };
}

const authStore = new AuthStore();
export default authStore;
