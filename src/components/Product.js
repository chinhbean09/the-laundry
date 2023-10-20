import React from "react";
import { NavLink } from "react-router-dom";
import AddToCart from "./AddToCart";
import { useProductContext } from "../context/productcontex";

const Product = (curElem) => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const {
    stock,
  } = singleProduct;
  const { id, name, price,image } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
         <img src={image} alt={name} />
          <figcaption className="caption">{name}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{price}</p>
          </div>
        </div>
        {stock > 0 && <AddToCart product={singleProduct} />}
      </div>
    </NavLink>
  );
};

export default Product;
