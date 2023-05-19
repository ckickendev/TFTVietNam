import { makeAutoObservable } from "mobx";

class AuthStore {
  isAuth = false;
  isAdmin = false;
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

  setIsAdmin = (isAdmin) => {
    this.isAdmin = isAdmin;
  };

  getIsAdmin = () => {
    return this.isAdmin;
  };
}

const authStore = new AuthStore();
export default authStore;
