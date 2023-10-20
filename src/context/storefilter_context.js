import { createContext, useContext, useReducer, useEffect } from "react";
import { useStoreContext } from "./storecontext";
import reducer from "../reducer/storeFilterReducer";

const FilterStoreContext = createContext();

const initialState = {
  filter_stores: [],
  all_stores: [],
  grid_view: true,
  filters: {
    text: "",
    category: "all",
  },
};

export const FilterStoreContextProvider = ({ children }) => {
  const { stores } = useStoreContext();
  console.log(
    "~file: storefilter_context.js",stores
  );

  const [state, dispatch] = useReducer(reducer, initialState);

  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  // sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  // update the filter values
    const updateFilterValue = (event) => {
      let name = event.target.name;
      let value = event.target.value;

      return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    };

  // to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_STORES" });
    dispatch({ type: "SORTING_STORES" });
  }, [stores, state.sorting_value, state.filters]);

  // to load all the products for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_STORES", payload: stores });
  }, [stores]);

  return (
    <FilterStoreContext.Provider
      value={{
        ...state,
        setGridView,
        sorting,
        updateFilterValue,
      }}>
      {children}
    </FilterStoreContext.Provider>
  );
};

export const useFilterStoreContext = () => {
  return useContext(FilterStoreContext);
};
