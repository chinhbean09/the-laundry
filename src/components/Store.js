import React from "react";
import { NavLink } from "react-router-dom";

const Store = (curElem) => {
  const { id, name, image } = curElem;
  return (
    <NavLink to={`/singlestore/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Store;
