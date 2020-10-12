import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { CityContext } from "../../../contexts/CityContext";
import styled from "styled-components";
import _ from "lodash";

import { ReactComponent as DriftlyLogo } from "../../../assets/driftlyLogo.svg";
import Header from "../../common/Header";
import CityCard from "../../common/CityCard.js";
import AdvancedSearchMenu from "../../common/AdvancedSearchMenu";

// STYLED COMPONENTS
const Container = styled.div`
  display: flex;
`;
const MenuWrapper = styled.div`
  background-color: #70c783;
  min-height: 100vh;
  width: 450px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
`;
const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 60%;
`;

const AdvancedSearch = () => {
  const {
    cities,
    setIsComparing,
    addCity,
    getData,
    weather,
    jobs,
    housing,
    covid,
    suggestions
  } = useContext(CityContext);
  const [filteredCities, setFilteredCities] = useState(suggestions);
  const [filters, setFilters] = useState([
    { name: "weatherData", value: "cold" }
  ]);
  const history = useHistory();

  const weatherFilter = weatherData => {
    return;
    // let result = {}, key;

    // for (key in obj) {
    //   if (obj.hasOwnProperty(key)) {
    //     result[key] = obj[key];
    //   }
    // }

    // return result;

    // if (weatherStat === 'cold') {
    //   return data.filter(o => o)
    // }
  };

  // const filterFunctions = _.overEvery([weatherFilter]);
  const [counttest, setCounttest] = useState(0);

  var priceFrom = 2000;
  var priceTo = 3000;

  const dataset = [
    { price: 2590, location: "Miami, FL" },
    { price: 1500, location: "Miami, FL" },
    { price: 2590, location: "Sellersburg, IN" }
  ];
  const testFilters = [{ name: "location", value: "Miami, FL" }];

  function locationFilter(data, location) {
    return data.filter(o => o.location === location);
  }

  function priceFilter(data) {
    return data.filter(o => o.price >= priceFrom && o.price <= priceTo);
  }

  var filterFunctions = _.overEvery([locationFilter, priceFilter]);

  var result;
  testFilters.map(f => {
    switch (f.name) {
      case "location":
        result = locationFilter(dataset, f.value);
        break;
    }
  });

  console.log(result);

  return (
    <Container>
      <MenuWrapper>
        <Link id="menuLogoWrapper">
          <DriftlyLogo id="menuLogo" onClick={() => history.push("/home")} />
        </Link>
        <h3 id="advanced-search-title">Refine your search</h3>
        <AdvancedSearchMenu id="advanced-search-menu" />
        <div id="get-results-button" role="button">
          Get Results
        </div>
      </MenuWrapper>
      <ResultsWrapper>
        <Header />
        <div className="results-title">
          {}Showing 20 of {filteredCities.length} results
        </div>
        <div className="card-container">
          {cities.map((city, index) => (
            <CityCard
              key={index}
              city={city.location}
              image={city.image}
              index={index}
              setIsComparing={setIsComparing}
              addCity={addCity}
              getData={getData}
              cities={cities}
              jobs={jobs}
              housing={housing}
              covid={covid}
              weather={weather}
            />
          ))}
        </div>
      </ResultsWrapper>
    </Container>
  );
};

export default AdvancedSearch;
