import { makeAutoObservable } from "mobx";

class LoadingStore {
  isLoading = false;

  constructor() {
    // makeObservable(this);
    makeAutoObservable(this);
  }

  setIsLoading = (value) => {
    this.isLoading = value;
  };

  getIsLoading = () => {
    return this.isLoading;
  };
}

const loadingStore = new LoadingStore();
export default loadingStore;

