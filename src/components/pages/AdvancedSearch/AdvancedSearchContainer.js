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
  const [filters, setFilters] = useState({
    avgSumTempFilter: "mild",
    avgUVIndexFilter: { low: 0, high: 10 },
    avgCloudCoverFilter: { low: 0, high: 100 }
  });

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

        // filter cities by summer "feels like F" temps
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

  // filter cities based on average summer UV index data
  const avgUVIndexFilter = (low, high) => {
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

        // filter cities by summer UV index
        if (low <= weatherObj.UVindex && weatherObj.UVindex <= high) {
          filteredResults.push(city[0]);
        }
      });
    });
    console.log(filteredResults);
    return filteredResults;
  };

  // filter cities based on average summer cloud cover data
  const avgCloudCoverFilter = (low, high) => {
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

        // filter cities by summer cloud cover
        if (low <= weatherObj.CloudCover && weatherObj.CloudCover <= high) {
          filteredResults.push(city[0]);
        }
      });
    });
    // console.log(filteredResults);
    return filteredResults;
  };

  const intersection = (...cities) => {
    let result = [];
    let lists;

    if (cities.length === 1) {
      lists = cities[0];
    } else {
      lists = cities;
      console.log(lists);
    }

    // filter empty arrays out
    lists = lists.filter(el => {
      return el !== [] && el !== undefined;
    });

    for (let i = 0; i < lists.length; i++) {
      let currentList = lists[i];
      for (let y = 0; y < currentList.length; y++) {
        let currentValue = currentList[y];
        if (result.indexOf(currentValue) === -1) {
          if (
            lists.filter(function(obj) {
              return obj.indexOf(currentValue) == -1;
            }).length == 0
          ) {
            result.push(currentValue);
          }
        }
      }
    }
    console.log(result);
    return result;
  };

  const filterCities = () => {
    let result = [];
    let { output1, output2, output3, output4, output5, output6, output7 } = [];
    const filtersArray = Object.entries(filters);
    filtersArray.map(f => {
      switch (f[0]) {
        case "avgSumTempFilter":
          output1 = avgSumTempFilter(f[1]);
          break;
        case "avgUVIndexFilter":
          output2 = avgUVIndexFilter(f[1].low, f[1].high);
          break;
        case "avgCloudCoverFilter":
          output3 = avgCloudCoverFilter(f[1].low, f[1].high);
          break;
      }
    });
    result = intersection(
      output1,
      output2,
      output3,
      output4,
      output5,
      output6,
      output7
    );
    return result;
  };

  return (
    <Container>
      <MenuWrapper>
        <Link id="menuLogoWrapper" to="/home">
          <DriftlyLogo id="menuLogo" />
        </Link>
        <h3 id="advanced-search-title">Refine your search</h3>
        <AdvancedSearchMenu id="advanced-search-menu" setFilters={setFilters} />
        <div
          id="get-results-button"
          role="button"
          onClick={() => setFilteredCities(filterCities())}
        >
          Get Results
        </div>
      </MenuWrapper>
      <ResultsWrapper>
        <Header />
        <div className="results-title">
          Showing 20 of {filteredCities.length} results
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
