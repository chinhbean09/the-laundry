import React from "react";
import { useStoreContext } from "../context/storecontext";
import GridViewStore from "./GridViewStore";

const StoreList = () => {
  const { filter_stores, grid_view } = useStoreContext();

  if (grid_view === true) {
    return <GridViewStore stores={filter_stores} />;
  }


};

export default StoreList;
