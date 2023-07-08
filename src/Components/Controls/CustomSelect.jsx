import React from "react";
import styled from "styled-components";


const CustomStyledSelect = styled.select`
  width: 200px;
  border-radius: 0.5rem;
  font-family: "Nunito Sans", sans-serif;
  font-size: 16px;
  font-weight: bold;
  border: none;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
  height: 40px;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 4px 8px;
  option {
    cursor: pointer;
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.backgroundColor};
  }

  &:focus {
    outline: none;
  }
`;

export default CustomStyledSelect;
