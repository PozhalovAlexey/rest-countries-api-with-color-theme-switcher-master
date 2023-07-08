import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  button {
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    cursor: pointer;
    font-size: 18px;
    background-color: inherit;
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 10px;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }

  button:hover {
    bottom: 25px;
  }
`;
const GoToTop: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 150;

      isTop !== true ? setScrolled(true) : setScrolled(false);
    });
  }, []);

  function handleGoToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Container>
        {scrolled && (
          <button
            id="goToTop"
            onClick={() => handleGoToTop()}
            title="Go to top"
          ></button>
        )}
      </Container>
    </>
  );
};

export default GoToTop;
