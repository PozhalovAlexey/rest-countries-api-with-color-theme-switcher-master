import React, { useEffect } from "react";
import { useState } from "react";
import Search from "./Search";
import CustomStyledSelect from "./CustomSelect";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Controls = ({ onSearch, regions }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const regionValue = region || "";
    if (typeof onSearch === "function") {
      onSearch(search, regionValue);
    }
  }, [search, region]);
  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />

      <CustomStyledSelect
        isRequired
        placeholder="Filtered by region"
        value={region}
        isClearable
        isSearchable = {false}
        onChange={(e) => setRegion(e.target.value)}
      >
        {regions.map((r) => (
          <option value={r.value}>{r.label.toUpperCase()}</option>
        ))}
      </CustomStyledSelect>
    </Wrapper>
  );
};

export default Controls;
