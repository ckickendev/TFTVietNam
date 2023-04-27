import { makeAutoObservable } from "mobx";

class LoadingStore {
  isLoading = false;

  constructor() {
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

