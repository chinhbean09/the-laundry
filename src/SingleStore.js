import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStoreContext } from "./context/storecontext";
import PageNavigation from "./components/PageNavigation";
import HeroSection from "./components/HeroSection";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";

const API = "https://api.pujakaitem.com/api/products";

const SingleStore = () => {
  // const { getSingleStore, isSingleLoading, singleStore } =
  // useStoreContext();
  const { getSingleStore, isSingleLoading, singleStore } = useStoreContext();
  const { id } = useParams();

  const {
    id: alias,
    name,
  } = singleStore;

useEffect(() => {
  getSingleStore(`${API}?id=${id}`);
}, []);

if (isSingleLoading) {
  return <div className="page_loading">Loading.....</div>;
}
const data = {name};

return(
  
  <Wrapper>
      <PageNavigation title={name} />
      <HeroSection myData={data} />
      <div className="container grid grid-filter-column">
        <div>
        <FilterSection />
        </div>
        <section className="product-view--sort">
          <div className="sort-filter">
          <Sort />
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
