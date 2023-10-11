import { createContext, useContext, useEffect } from "react";
import axios from "axios";
// /được sử dụng để tạo một Context mới
// /Đây là nơi bạn sẽ lưu trữ dữ liệu bạn muốn chia sẻ trong ứng dụng của bạn.

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
  //hàm getProducts để thực hiện gọi API bất đồng bộ
  const getProducts = async (url) => {
    // /gửi một hành động (action) đến store để cập nhật trạng thái ứng dụng
    // dispatch({ type: "SET_LOADING" });
    try {
      //gọi API bằng cách sử dụng Axios để lấy dữ liệu từ URL được đưa vào qua tham số url.
      const res = await axios.get(url);
      //dữ liệu sản phẩm được lấy từ phản hồi của API (res.data) và được gán vào biến products.
      const products = await res.data;
      // //console.log để in dữ liệu products ra trong cửa sổ console. 
      console.log(
        "🚀 ~ file: productcontex.js ~ line 18 ~ getProducts ~ products",products
      );
    } catch (error) {}
  };

  //gọi hàm getProducts khi AppProvider được tạo.
  useEffect(() => {
    //Điều này đảm bảo rằng gọi API xảy ra khi thành phần được gắn kết lần đầu tiên.
    getProducts(API);
  }, []);

  return (
        //sử dụng <AppContext.Provider> để bọc các thành phần con với dữ liệu bạn muốn chia sẻ. 
    <AppContext.Provider value={{ myName: "ChinhDo" }}>{children}</AppContext.Provider>
  );
};

// custom hooks, nó được tạo ra để đơn giản hóa việc truy cập dữ liệu từ AppContext.
const useProductContext = () => {
  return useContext(AppContext);
    //được sử dụng để trả về giá trị của AppContext
  //Điều này có nghĩa rằng bất kỳ thành phần nào sử dụng useProductContext sẽ nhận được dữ liệu đã được đặt trong AppProvider.

};

export { AppProvider, AppContext, useProductContext };
