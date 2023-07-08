import axios from "axios";
import { ALL_COUNTRIES, searchByRegion } from "../Config";
import React, { useEffect, useState } from "react";
import Controls from "../Components/Controls/Controls";
import Card from "../Components/Countries/Card";
import List from "../Components/Countries/List";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);

  const [filteredCountries, setFilteredCountries] = useState([]);
  const handleSearch = async (search, region) => {
    let currentCountries = [...countries];
    if (region) {
      const { data } = await axios.get(searchByRegion(region));
      currentCountries = data;
    }
    if (search) {
      currentCountries = currentCountries.filter((c) =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredCountries(
      currentCountries.filter((c) => c?.name?.common !== "Bouvet Island")
    );
  };

  const getCountries = async () => {
    const { data } = await axios.get(ALL_COUNTRIES);
    const regionsSet = new Set();
    data.forEach((e) => regionsSet.add(e.region));
    setRegions(
      Array.from(regionsSet).map((r) => {
        return { label: r, value: r };
      })
    );
    setCountries(data);
    setFilteredCountries(data);
  };
  useEffect(() => {
    getCountries();
  }, []);
  return (
    <>
      <Controls onSearch={handleSearch} regions={regions} />
      <List>
        {filteredCountries?.map((c) => (
          <Card key={c?.population + c?.region} country={c} />
        ))}
      </List>
    </>
  );
};

export default HomePage;
