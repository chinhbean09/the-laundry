import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";


const StoreList = () => {
  const { filter_products, grid_view } = useFilterContext();

  if (grid_view === true) {
    return <GridView products={filter_products} />;
  }


};

export default StoreList;
