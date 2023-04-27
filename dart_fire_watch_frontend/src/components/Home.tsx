import { HomePageComponent } from "./HomePage/HomePageComponent";
import { LoadingCustom } from "../utils/LoadingCustom";
import { observer } from "mobx-react";

export const Home = observer(({ loadingStore }: any) => {
  return (
    <div>
      {loadingStore.getIsLoading() && <LoadingCustom isOpen={loadingStore.getIsLoading()} />}
      <HomePageComponent />
    </div>
  );
});
