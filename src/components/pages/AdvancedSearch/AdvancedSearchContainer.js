import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const [summerTempInput, setSummerTempInput] = useState("mild");
  const [filters, setFilters] = useState([
    { name: "weatherData", value: "cold" }
  ]);

  // filter cities based on average summer "feels like F" data
  const avgSumTempFilter = temp => {
    // convert weather data object to array
    const weatherArray = Object.entries(weather);

    // initialize array to store filtered cities
    const filteredResults = [];

    // loop through all states in array
    weatherArray.map(state => {
      // convert state weather object to array
      const stateWeatherArray = Object.entries(state[1]);

      // loop through all cities in state array
      stateWeatherArray.map(city => {
        // access cities' weather arrays
        const cityWeatherArray = Object.entries(city[1]);

        // access summer weather object
        const weatherObj = cityWeatherArray[0][1];

        // filter cities by summer "feels like F" temps <60
        if (temp === "cold") {
          if (weatherObj.FeelsLikeF < 65) {
            filteredResults.push(city[0]);
          }
        } else if (temp === "mild") {
          if (weatherObj.FeelsLikeF >= 65 && weatherObj.FeelsLikeF <= 80) {
            filteredResults.push(city[0]);
          }
        } else if (temp === "hot") {
          if (weatherObj.FeelsLikeF > 80) {
            filteredResults.push(city[0]);
          }
        }
      });
    });
    console.log(filteredResults);
    return filteredResults;
  };

  {
    Object.keys(weather).length !== 0 && avgSumTempFilter(weather);
  }

  const testFilters = [{ name: "avgSumTempFilter", value: 60 }];

  let filterFunctions = _.overEvery([avgSumTempFilter]);

  function locationFilter(data, location) {
    return data.filter(o => o.location === location);
  }

  let result;
  testFilters.map(f => {
    switch (f.name) {
      case "location":
        // result = locationFilter(dataset, f.value);
        break;
      case "avgSumTempFilter":
        result = avgSumTempFilter(summerTempInput);
        break;
    }
  });

  {
    result.length !== 0 && console.log(result);
  }

  return (
    <Container>
      <MenuWrapper>
        <Link id="menuLogoWrapper" to="/home">
          <DriftlyLogo id="menuLogo" />
        </Link>
        <h3 id="advanced-search-title">Refine your search</h3>
        <AdvancedSearchMenu
          id="advanced-search-menu"
          setSummerTempInput={setSummerTempInput}
        />
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
