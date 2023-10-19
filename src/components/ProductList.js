import React from "react";
import { useStoreContext } from "../context/storecontext";
import GridView from "./GridView";

const  ProductList = () => {
  const { singleServiceStore, grid_view} = useStoreContext();
  

  if (grid_view === true) {
    return <GridView products={singleServiceStore} />;
    
  }
  console.log(
    "~file: 123.js",singleServiceStore
  );
  console.log(
    "~file: 1243.js", grid_view
  );


};

export default ProductList;
