import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { searchByCountry } from "../Config";
import BackButton from "./BackButton/BackButton";
import Info from "./InfoPage/Info";

const Details = () => {
  const [country, setCountry] = useState({});
  const { name } = useParams();
  const navigate = useNavigate();
  const getCountryDetailInfo = async () => {
    const { data } = await axios.get(searchByCountry(name));
    setCountry(data[0]);
  };
  useEffect(() => {
    getCountryDetailInfo();
  }, [name]);
  return (
    <>
      <BackButton onClick={() => navigate(-1)}></BackButton>
      {country && <Info {...country} />}
    </>
  );
};

export default Details;
