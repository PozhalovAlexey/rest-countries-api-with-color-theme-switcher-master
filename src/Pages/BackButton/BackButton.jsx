import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0 1rem;
  border: none;
  border-radius: .5rem;
  cursor: pointer;
  line-height: 2.5;
  color: ${({ theme }) => theme.color};
  box-shadow: ${({theme})=>theme.shadow};
  background-color: ${({theme})=>theme.main};
  display: flex;
  align-items: center;
`;

export const BackButton = ({ onClick }) => {
  return <Button onClick={onClick}>Back</Button>;
};

export default BackButton;
