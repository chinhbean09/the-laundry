import React from "react";
import { NavLink } from "react-router-dom";

const Product = (curElem) => {
  const { id, name, details, image } = curElem;
  const { price, from, to, unit } = details;
  
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
      </div>
    </NavLink>
  );
};

export default Product;
