import React from "react";
import styled from "styled-components";

const Home = () => {
  return <Wrapper className="test">Home</Wrapper>;
};

const Wrapper = styled.section`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
  width:20rem;
  height: 20rem;
`;

export default Home;
