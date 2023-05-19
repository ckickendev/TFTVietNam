import { makeAutoObservable } from "mobx";

class DialogStore {
  isDisplayDialog = true;
  propertiesDialog = {};

  constructor() {
    makeAutoObservable(this);
  }

  setIsDisplayDialog = (value) => {
    this.isDisplayDialog = value;
  };

  getIsDisplayDialog = () => {
    return this.isDisplayDialog;
  };

  setPropertiesDialog = (value) => {
    this.propertiesDialog = value;
  }

  getPropertiesDialog = () => {
    return this.propertiesDialog;
  }
} 

const dialogStore = new DialogStore();
export default dialogStore;
