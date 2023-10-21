import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "./context/storecontext";
import PageNavigation from "./components/PageNavigation";
import HeroSection from "./components/HeroSection";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";

const API = "https://magpie-aware-lark.ngrok-free.app/api/v1/base";

const SingleStore = () => {
  // const { getSingleStore, isSingleLoading, singleStore } =
  // useStoreContext();
  const { getSingleStore,getSingleServiceStore, isSingleLoading, singleStore,singleServiceStore } = useStoreContext();
  // console.log("~file: SingleStore.js ~ line 10 ~ SingleStore ~ singleStore", 
  // singleStore
  // );
  // const {filter_stores} = useFilterStoreContext();
  

  const { id } = useParams();
  // console.log("~ file: SingleProduct.js ~ line 6 ~ singleProduct ~ id", id)

  const {
    id: alias,
    name,
    area,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,


  } = singleStore;

  const {
    id: ServiceId ,
    storeId,
    nameService,
    imageBanner,
    description: Servicedescription,
    details,
    materials,
    cloth,
    isStandard,  
} = singleServiceStore;

useEffect(() => {
  getSingleStore(`${API}/store/get/${id}`);
  getSingleServiceStore(`${API}/special-service/store/${id}`);
  // getSingleServiceStore(`https://magpie-aware-lark.ngrok-free.app/api/v1/base/store/all`);
}, [],[]);

console.log(
  "~file: test.js",singleServiceStore
);
// useEffect(() => {
//   getSingleServiceStore(`${API}/get/${id}`);
// }, []);

if (isSingleLoading) {
  return <div className="page_loading">Loading.....</div>;
}
const data = {
  name,
  image,
};

return(
  
  <Wrapper>
      <PageNavigation title={name} />
      <HeroSection myData={data} />
      <div className="container grid grid-filter-column">
        <div>
        {/* <FilterSection /> */}
        </div>
        <section className="product-view--sort">
          <div className="sort-filter">
          {/* <Sort /> */}
          </div>
          <div className="main-product">
          <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
);
};
const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default SingleStore;
