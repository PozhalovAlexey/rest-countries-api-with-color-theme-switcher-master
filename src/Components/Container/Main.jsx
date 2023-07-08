import React from "react";
import { Container } from "./Container";
import styled from "styled-components";

const Wrapper = styled.main`
  position: relative;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.backgroundColor};

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
export default Main;
