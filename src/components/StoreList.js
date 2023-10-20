import React from "react";
import GridViewStore from "./GridViewStore";
import { useFilterStoreContext } from "../context/storefilter_context";

const StoreList = () => {
  const { filter_stores, grid_view } = useFilterStoreContext();

  if (grid_view === true) {
    return <GridViewStore stores={filter_stores} />;
  }
};

export default StoreList;
