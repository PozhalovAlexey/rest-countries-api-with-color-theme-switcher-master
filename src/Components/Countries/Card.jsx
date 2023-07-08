import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.article`
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  box-shadow: ${({ theme }) => theme.shadow};
  cursor: pointer;
  overflow: hidden;
`;
const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  box-shadow: ${({ theme }) => theme.shadow};
  object-fit: cover;
  object-position: center;
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin: 0 0 5px;
  font-weight: bold;
`;

const CardList = styled.ul`
  list-style: none;
  padding: 0.7rem;
  margin: 0;
`;

const CardListItem = styled.li`
  padding: 0.2rem 0 0;
  line-height: 1.5rem;
`;

const Card = ({ country }) => {
  const navigate = useNavigate();
  const toCardPage = () => {
    navigate(`pages/${country.name.common}`);
  };
  return (
    <Wrapper onClick={toCardPage}>
      <CardImage src={country?.flags.png} alt={country?.name.common} />
      <CardBody>
        <CardTitle>{country?.name.common}</CardTitle>
        <CardList>
          <CardListItem>
            <b>Population:</b>
            {country?.population}
          </CardListItem>
          <CardListItem>
            <b>Region:</b>
            {country?.region}
          </CardListItem>
          <CardListItem>
            <b>Capital:</b>
            {country?.capital && country?.capital[0]}
          </CardListItem>
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

export default Card;
