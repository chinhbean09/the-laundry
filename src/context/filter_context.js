import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontex";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
};

export const FilterContextProvider = ({ children }) => {
  // sử dụng useProductContext để lấy dữ liệu sản phẩm từ context khác
  const { products } = useProductContext();

  //  useReducer(hook nè) để quản lý trạng thái của FilterContext dựa trên reducer từ filterReducer.js
  const [state, dispatch] = useReducer(reducer, initialState);

  // hàm để thiết lập chế độ xem dạng lưới (grid view)
  const setGridView = () => {
    // Gọi dispatch với hành động "SET_GRID_VIEW" để cập nhật trạng thái
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  // sử dụng useEffect để thực hiện các hành động sau khi component được gắn kết
  useEffect(() => {
    // gọi dispatch với hành động "LOAD_FILTER_PRODUCTS" và dữ liệu sản phẩm từ context khác
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    //  FilterContext.Provider để bọc các thành phần con với dữ liệu muốn chia sẻ
    <FilterContext.Provider
      value={{ ...state, setGridView}}>
      {children}
    </FilterContext.Provider>
  );
};

// tạo custom hook để dễ dàng truy cập dữ liệu từ FilterContext
//nó sẽ có thể truy cập dữ liệu từ FilterContext. Điều này cho phép component đó lấy dữ liệu và trạng thái từ FilterContext 
export const useFilterContext = () => {
  return useContext(FilterContext);
};
