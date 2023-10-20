import React from 'react'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

export const Service1 = () => {
  return (
    <div className='container'>
        <div className="hero-section-data">
        <h1>Giat Say</h1>
    </div>
    </div>
  )
}
const Wrapper = styled.section`
.hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }
`;

export default Service1;