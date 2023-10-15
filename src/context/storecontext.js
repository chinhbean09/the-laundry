import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/storeReducer";

// /được sử dụng để tạo một Context mới
// /Đây là nơi bạn sẽ lưu trữ dữ liệu bạn muốn chia sẻ trong ứng dụng của bạn.  
const StoreContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  isSingleLoading: false,
  singleStore : {},
};

const StoreProvider = ({ children }) => {
  //useReducer để quản lý trạng thái của ứng dụng dựa trên reducer từ productReducer.js
  //initialState định nghĩa trạng thái ban đầu của ứng dụng sẽ được quản lý bởi reducer.
  //useReducer để tạo ra trạng thái và dispatcher (state và dispatch), với trạng thái ban đầu từ initialState.                                  
  const [state, dispatch] = useReducer(reducer, initialState);

  //hàm getProducts để thực hiện gọi API bất đồng bộ
  const getStores = async (url) => {
    ///Hàm dispatch được sử dụng để gửi các hành động đến reducer
    //Khi bạn gọi dispatch với một hành động cụ thể, nó sẽ kích hoạt reducer 
    //để xử lý hành động và cập nhật trạng thái của ứng dụng.
    dispatch({ type: "SET_LOADING" });
    try {
      //gọi API bằng cách sử dụng Axios để lấy dữ liệu từ URL được đưa vào qua tham số url.
      const res = await axios.get(url);
      //dữ liệu sản phẩm được lấy từ phản hồi của API (res.data) và được gán vào biến products.
      const stores = await res.data;
      dispatch({ type: "SET_API_DATA", payload: stores });
      //console.log để in dữ liệu products ra trong cửa sổ console. 
      
    
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

    //API FOR SINGLE PRODUCT 
    const getSingleStore = async (url) => {
      dispatch({ type: "SET_SINGLE_LOADING" });
      try{
        const res = await axios.get(url);
        const singleStore = await res.data;
        dispatch({ type: "SET_SINGLE_STORE", payload: singleStore });
      }catch(error){
        dispatch({ type: "SET_SINGLE_ERROR" });
      }

    }


  //gọi hàm getProducts khi AppProvider được tạo.
  useEffect(() => {
    //Điều này đảm bảo rằng gọi API xảy ra khi thành phần được gắn kết lần đầu tiên.
    getStores(API);
  }, []);


  return (
        //sử dụng <AppContext.Provider> để bọc các thành phần con với dữ liệu bạn muốn chia sẻ. 
        <StoreContext.Provider value={{ ...state, getSingleStore }}>{children}</StoreContext.Provider>
        );
};

// custom hooks, nó được tạo ra để đơn giản hóa việc truy cập dữ liệu từ AppContext.
const useStoreContext = () => {
  return useStoreContext(StoreContext);
    //được sử dụng để trả về giá trị của AppContext
  //Điều này có nghĩa rằng bất kỳ thành phần nào sử dụng useProductContext sẽ nhận được dữ liệu đã được đặt trong AppProvider.

};

export { StoreProvider, StoreContext, useStoreContext };