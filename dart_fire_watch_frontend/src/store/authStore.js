import { makeObservable, observable } from "mobx";

class AuthStore {
  isAuth = true;
  whoAmI = "";

  setIsAuth = (auth) => {
    this.isAuth = auth;
  };

  getIsAuth = () => {
    console.log("log this auth: ", this.isAuth ) ;
    return this.isAuth;
  };

  setWhoAmI = (whoAmI) => {
    this.whoAmI = whoAmI;
  };

  getWhoAmI = () => {
    console.log("log this auth: ", this.whoAmI ) ;
    return this.whoAmI;
  };
}

const authStore = new AuthStore();
export default authStore;
