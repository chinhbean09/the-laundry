import styled from "styled-components";
import StoreFilterSection from "./components/StoreFilterSection";
import StoreList from "./components/StoreList";
import SortStore from "./components/SortStore";

const Products = () => {
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <StoreFilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <SortStore />
          </div>
          <div className="main-product">
            <StoreList />
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

export default Products;
