const ProductReducer = (state, action) => {
  // if (action.type === "SET_LOADING") {
  //   return {
  //     ...state,
  //     isLoading: true,
  //   };
  // }

  // if (action.type === "API_ERROR") {
  //   return {
  //     ...state,
  //     isLoading: false,
  //     isError: true,
  //   };
  // }

  switch (action.type) {
    case "SET_LOADING":
      //Hành động có loại "SET_LOADING" được sử dụng để bật trạng thái tải (isLoading) lên true. 
      //Trạng thái isLoading chỉ định rằng ứng dụng đang tải dữ liệu.
      return {
        //tạo một bản sao (copy) của trạng thái hiện tại (state).
        //Điều này đảm bảo rằng bạn không thay đổi trạng thái ban đầu và tạo ra một trạng thái mới dựa trên trạng thái hiện tại.
        ...state,

        isLoading: true,
      };

    case "SET_API_DATA":
// Hành động có loại "SET_API_DATA" được sử dụng khi dữ liệu từ API đã được lấy thành công
    const featureData = action.payload.filter((curElem) => {
      //đang thực hiện việc lọc (filter) các phần tử trong mảng action.payload 
      //để tạo một mảng mới chỉ chứa các phần tử có thuộc tính featured bằng true.
      //curElem là biến tạm thời đại diện cho từng phần tử trong mảng mà filter đang lặp qua
        return curElem.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        //Dữ liệu sản phẩm từ API (action.payload) được gán vào trạng thái products.
        products: action.payload,
        //Dữ liệu sản phẩm đặc biệt (featureProducts) được tạo bằng cách lọc các sản phẩm có thuộc tính featured là true.
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      case "SET_SINGLE_LOADING":
        return {  
          ...state,
  
          isSingleLoading: true,
        };

      case "SET_SINGLE_PRODUCT":
        return {  
          ...state,

          isSingleLoading: false,
          singleProduct: action.payload,

        };
        case "SET_SINGLE_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      }; 
    default:
      return state;
  }
};

export default ProductReducer;
