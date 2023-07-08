import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const SwitcherTheme = styled.button`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color};
  cursor: pointer;
  padding: 4px 8px;
  align-items: center;
  gap: 0.75rem;
  border: none;
  background-color: ${({ theme }) => theme.main};
`;

const ModeSwitcher = ({ children, toggleMode }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <SwitcherTheme onClick={toggleMode}>
        {children}
        <span style={{ marginLeft: "0.7rem" }}>{theme.name} Mode</span>
      </SwitcherTheme>
    </>
  );
};

export default ModeSwitcher;
