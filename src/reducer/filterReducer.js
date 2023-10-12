const filterReducer = (state, action) => {
    //  reducer nhận vào trạng thái hiện tại (state) và hành động (action).
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        //action được gửi đến reducer thông qua dispatch và sau đó reducer sử dụng loại hành động 
        //và dữ liệu payload để cập nhật trạng thái của ứng dụng.

        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
        };
  
      case "SET_GRID_VIEW":
        // Hành động "SET_GRID_VIEW" được sử dụng để thiết lập chế độ xem lưới (grid view).
        // Nó cập nhật trạng thái grid_view thành true để hiển thị sản phẩm dưới dạng lưới.
        return {
          ...state,
          grid_view: true,
        };
  
      default:
        // Nếu không có hành động nào khớp, trạng thái không thay đổi.
        return state;
    }
  };
  
  export default filterReducer;
  