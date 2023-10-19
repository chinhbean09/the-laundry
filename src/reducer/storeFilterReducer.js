const storeFilterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_STORES":
        return {
          ...state,
          filter_stores: [...action.payload],
          all_stores: [...action.payload],
        };
  
      case "SET_GRID_VIEW":
        return {
          ...state,
          grid_view: true,
        };
  
      case "GET_SORT_VALUE":
        // let userSortValue = document.getElementById("sort");
        // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
        return {
          ...state,
          sorting_value: action.payload,
        };
  
      case "SORTING_STORES":
        let newSortData;
        // let tempSortProduct = [...action.payload];
  
        const { filter_stores, sorting_value } = state;
        let tempSortStore = [...filter_stores];
  
        const sortingStores = (a, b) => {
        //   if (sorting_value === "lowest") {
        //     return a.price - b.price;
        //   }
  
        //   if (sorting_value === "highest") {
        //     return b.price - a.price;
        //   }
  
          if (sorting_value === "a-z") {
            return a.name.localeCompare(b.name);
          }
  
          if (sorting_value === "z-a") {
            return b.name.localeCompare(a.name);
          }
        };
  
        newSortData = tempSortStore.sort(sortingStores);
  
        return {
          ...state,
          filter_stores: newSortData,
        };
  
      case "UPDATE_FILTERS_VALUE":
        const { name, value } = action.payload;
  
        return {
          ...state,
          filters: {
            ...state.filters,
            [name]: value,
          },
        };
   
      case "FILTER_STORES":
        let { all_stores } = state;
        let tempFilterStore = [...all_stores];
  
        const { text, category, company } = state.filters;
  
        if (text) {
            tempFilterStore = tempFilterStore.filter((curElem) => {
            return curElem.name.toLowerCase().includes(text);
          });
        }

        if (company !== "all") {
          tempFilterStore = tempFilterStore.filter(
            (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
          );
        }

        if (category !== "all") {
            tempFilterStore = tempFilterStore.filter(
            (curElem) =>{ return curElem.category === category}
          );
        }
        return {
          ...state,
          filter_stores: tempFilterStore,
        };
  
      default:
        return state;
    }
  };
  
  export default storeFilterReducer;
