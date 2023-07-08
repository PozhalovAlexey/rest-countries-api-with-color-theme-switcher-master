import { useState } from "react";
import Header from "./Components/Header/Header.jsx";
import { Container } from "./Components/Container/Container";
import Main from "./Components/Container/Main";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import Details from "./Pages/Details";
import { Route, Routes } from "react-router-dom";
import ToTop from "./Components/Controls/ToTop";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme: { color } }) => color};
    background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  }
`;
const darkTheme = {
  name: "dark",
  main: "hsl(209, 23%, 22%)",
  shadow: "rgba(245,245,245,0.2) 0 0 8px",
  backgroundColor: "hsl(207, 26%, 17%)",
  color: "hsl(0, 0%, 100%)",
  input: "hsl(0, 0%, 52%)",
};
const lightTheme = {
  name: "light",
  main: "hsl(0, 0%, 100%)",
  shadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  backgroundColor: "hsl(0, 0%, 98%)",
  color: "hsl(200, 15%, 8%)",
  input: "hsl(0, 0%, 52%)",
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkTheme"))
  );

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkTheme", JSON.stringify(!isDarkMode));
  };
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header toggleMode={toggleMode} />
      <Container>
        <Main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/pages/:name" element={<Details />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
          <ToTop />
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
