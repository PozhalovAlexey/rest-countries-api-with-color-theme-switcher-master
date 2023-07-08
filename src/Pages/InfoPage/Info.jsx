import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { filterByCode } from "../../Config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;
  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 4rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 3.5rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 0 1rem 0 5px;
  margin-top: 5px;

  & > b {
    font-weight: bold;
  }
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0 1rem;
  line-height: 1.5;
  background-color: ${({ theme }) => theme.main};
  box-shadow: ${({ theme }) => theme.shadow};
  cursor: pointer;
`;

const Info = (props) => {
  const {
    name,
    flags,
    capital = [],
    population,
    region,
    subregion,
    currencies,
    languages,
    borders = [],
    tld,
  } = props;

  const [neighbors, setNeighbors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (borders.length)
      axios
        .get(filterByCode(borders))
        .then(({ data }) => setNeighbors(data.map((c) => c.name)));
  }, [borders]);

  return (
    <Wrapper>
      <InfoImage src={flags?.png} alt={name?.common} />
      <div>
        <InfoTitle>{name?.common}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name: </b>
              {name &&
                name.nativeName &&
                Object.keys(name.nativeName)?.map((key) => (
                  <span>{name.nativeName[key].official}</span>
                ))}
            </ListItem>
            <ListItem>
              <b>Population:</b> {population}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital?.map((e) => e)}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Subregion:</b> {subregion}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain </b>
              {tld?.map((e) => (
                <span key={e}>{e}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currency: </b>
              {currencies &&
                Object.keys(currencies)?.map((key) => (
                  <span>{currencies[key].name}</span>
                ))}
            </ListItem>
            <ListItem>
              <b>Languages: </b>
              {languages &&
                Object.keys(languages)?.map((key) => (
                  <div key={key}>
                    {languages[key].split(", ").map((l, i) => (
                      <span key={i}>{l.trim()}</span>
                    ))}
                  </div>
                ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries: </b>
          {!borders?.length ? (
            <span> There is no border countries</span>
          ) : (
            <TagGroup>
              {neighbors?.map((b) => (
                <Tag
                  onClick={() => navigate(`/pages/${b.common}`)}
                  key={b.common}
                >
                  {b.common}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};

export default Info;
