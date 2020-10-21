import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CityContext } from "../../../contexts/CityContext";
import styled from "styled-components";

import { ReactComponent as DriftlyLogo } from "../../../assets/driftlyLogo.svg";
import Header from "../../common/Header";
import CityCardAdvancedSearch from "../../common/CityCardAdvancedSearch.js";
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
    suggestions,
    data,
    population
  } = useContext(CityContext);

  const [filteredCities, setFilteredCities] = useState(suggestions);
  const [filters, setFilters] = useState({
    avgSumTempFilter: "mild",
    avgUVIndexFilter: { low: 0, high: 10 },
    avgCloudCoverFilter: { low: 0, high: 100 },
    serviceJobsFilter: 0,
    governmentJobsFilter: 0,
    manufacturingJobsFilter: 0,
    housingPriceFilter: { low: 0, high: 9999999999 },
    covidFilter: 99999999,
    popFilter: "large"
  });
  const [dictionary, setDictonary] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLength, setPageLength] = useState(10);

  // Create a dictionary to match filtered city names to images
  useEffect(() => {
    const createDictionary = () => {
      const dict = {};

      data[0] &&
        data[0].map(c => {
          dict[c.location] = c.image;
        });

      return dict;
    };

    setDictonary(createDictionary());
  }, [data]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const body = document.body,
      html = document.documentElement;

    if (window.innerHeight + window.scrollY >= body.scrollHeight) {
      setPageNumber(prev => prev + 1);
    }
  };

  // filter cities based on city population data
  const popFilter = size => {
    // convert weather data object to array
    const popArray = Object.entries(population);

    // initialize array to store filtered cities
    const filteredResults = [];

    // loop through all cities in array
    popArray.map(city => {
      if (size === "small") {
        if (city[1] < 500000) {
          filteredResults.push(city[0]);
        }
      } else if (size === "medium") {
        if (500000 <= city[1] && city[1] < 1000000) {
          filteredResults.push(city[0]);
        }
      } else if (size === "large") {
        if (1000000 <= city[1] && city[1] < 2000000) {
          filteredResults.push(city[0]);
        }
      } else if (size === "mega") {
        if (2000000 <= city[1]) {
          filteredResults.push(city[0]);
        }
      }
    });

    console.log(filteredResults);
    return filteredResults;
  };

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

  // filter cities based on minimum number of service jobs in that city's state
  const serviceJobsFilter = minimum => {
    // convert jobs and weather data objects to arrays
    const jobsArray = Object.entries(jobs);
    const weatherArray = Object.entries(weather);

    // initialize array to store filtered cities
    const filteredResults = [];

    // loop through all states in jobs array
    jobsArray.map(state => {
      // check for states that have more than minimum number of service jobs
      if (state[1]["Total Service-Providing"] * 1000 >= minimum) {
        // loop through weather array to gather all cities in the states that meet criteria above
        weatherArray.map(w => {
          // check if state codes match between weather and state job arrays
          if (w[0] === state[0]) {
            // extract cities from weather data
            const weatherData = Object.entries(w[1]);

            // add all cities from selected states to filtered results array
            weatherData.map(city => {
              filteredResults.push(city[0]);
            });
          }
        });
      }
    });

    return filteredResults;
  };

  const governmentJobsFilter = minimum => {
    // convert jobs and weather data objects to arrays
    const jobsArray = Object.entries(jobs);
    const weatherArray = Object.entries(weather);

    // initialize array to store filtered cities
    const filteredResults = [];

    // loop through all states in jobs array
    jobsArray.map(state => {
      // check for states that have more than minimum number of government jobs
      if (state[1]["Total Government Sector"] * 1000 >= minimum) {
        // loop through weather array to gather all cities in the states that meet criteria above
        weatherArray.map(w => {
          // check if state codes match between weather and state job arrays
          if (w[0] === state[0]) {
            // extract cities from weather data
            const weatherData = Object.entries(w[1]);

            // add all cities from selected states to filtered results array
            weatherData.map(city => {
              filteredResults.push(city[0]);
            });
          }
        });
      }
    });

    return filteredResults;
  };

  const manufacturingJobsFilter = minimum => {
    // convert jobs and weather data objects to arrays
    const jobsArray = Object.entries(jobs);
    const weatherArray = Object.entries(weather);

    // initialize array to store filtered cities
    const filteredResults = [];

    // loop through all states in jobs array
    jobsArray.map(state => {
      // check for states that have more than minimum number of manufacturing jobs
      if (state[1]["Total Manufacturing"] * 1000 >= minimum) {
        // loop through weather array to gather all cities in the states that meet criteria above
        weatherArray.map(w => {
          // check if state codes match between weather and state job arrays
          if (w[0] === state[0]) {
            // extract cities from weather data
            const weatherData = Object.entries(w[1]);

            // add all cities from selected states to filtered results array
            weatherData.map(city => {
              filteredResults.push(city[0]);
            });
          }
        });
      }
    });

    return filteredResults;
  };

  // filter cities based on average housing prices in that city's state
  const housingPriceFilter = (low, high) => {
    // convert housing data object to array
    const housingArray = Object.entries(housing);

    // initialize array to store filtered cities
    const filteredResults = [];

    // loop through all states in array
    housingArray.map(state => {
      // convert state housing object to array
      const stateHousingArray = Object.entries(state[1]);

      // loop through all cities in state array
      stateHousingArray.map(city => {
        // convert house price from string with commas to integer
        let priceInNumber = parseInt(city[1].replace(/,/g, ""), 10);

        // filter cities by average prices for 1BR homes in that city's state
        if (low <= priceInNumber && priceInNumber <= high) {
          filteredResults.push(city[0]);
        }
      });
    });

    return filteredResults;
  };

  // filter cities based on number of citizens testing positive for COVID-19 in that city's state
  const covidFilter = maximum => {
    // convert COVID-19 and weather data objects to arrays
    const covidArray = Object.entries(covid);
    const weatherArray = Object.entries(weather);

    // initialize array to store filtered cities
    const filteredResults = [];

    // // loop through all states in array
    covidArray.map(state => {
      // check if number of citizens testing positive in that city's state is less than maximum
      if (state[1].positive <= maximum) {
        // loop through all states in weather array
        weatherArray.map(w => {
          if (w[0] === state[0]) {
            // extract cities from weather data
            const weatherData = Object.entries(w[1]);

            // add all cities from selected states to filtered results array
            weatherData.map(city => {
              filteredResults.push(city[0]);
            });
          }
        });
      }
    });

    return filteredResults;
  };

  const intersection = (...cities) => {
    let result = [];
    let lists;

    if (cities.length === 1) {
      lists = cities[0];
    } else {
      lists = cities;
    }

    // filter empty arrays out
    lists = lists.filter(el => {
      return el !== undefined;
    });

    for (let i = 0; i < lists.length; i++) {
      let currentList = lists[i];
      for (let y = 0; y < currentList.length; y++) {
        let currentValue = currentList[y];
        if (result.indexOf(currentValue) === -1) {
          if (
            lists.filter(function(obj) {
              return obj.indexOf(currentValue) === -1;
            }).length === 0
          ) {
            result.push(currentValue);
          }
        }
      }
    }

    return result;
  };

  const filterCities = () => {
    let result = [];
    let {
      output0,
      output1,
      output2,
      output3,
      output4,
      output5,
      output6,
      output7,
      output8
    } = [];
    const filtersArray = Object.entries(filters);
    console.log(filtersArray);
    filtersArray.map(f => {
      switch (f[0]) {
        case "popFilter":
          output0 = popFilter(f[1]);
          break;
        case "avgSumTempFilter":
          output1 = avgSumTempFilter(f[1]);
          break;
        case "avgUVIndexFilter":
          output2 = avgUVIndexFilter(f[1].low, f[1].high);
          break;
        case "avgCloudCoverFilter":
          output3 = avgCloudCoverFilter(f[1].low, f[1].high);
          break;
        case "serviceJobsFilter":
          output4 = serviceJobsFilter(f[1]);
          break;
        case "governmentJobsFilter":
          output5 = governmentJobsFilter(f[1]);
          break;
        case "manufacturingJobsFilter":
          output6 = manufacturingJobsFilter(f[1]);
          break;
        case "housingPriceFilter":
          output7 = housingPriceFilter(f[1].low, f[1].high);
          break;
        case "covidFilter":
          output8 = covidFilter(f[1]);
      }
    });
    result = intersection(
      output0,
      output1,
      output2,
      output3,
      output4,
      output5,
      output6,
      output7,
      output8
    );
    return result;
  };

  return (
    <Container>
      <MenuWrapper>
        <Link id="menuLogoWrapper" to="/">
          <DriftlyLogo id="menuLogo" />
        </Link>
        <h3 id="advanced-search-title">Refine your search</h3>
        <AdvancedSearchMenu id="advanced-search-menu" setFilters={setFilters} />
        <div
          id="get-results-button"
          role="button"
          onClick={() => {
            setFilteredCities(filterCities());
            setPageNumber(1);
          }}
        >
          Get Results
        </div>
      </MenuWrapper>
      <ResultsWrapper>
        <Header />
        <div className="results-title">
          Showing {filteredCities.slice(0, pageLength * pageNumber).length} of{" "}
          {filteredCities.length} results
        </div>
        <div className="card-container">
          {filteredCities
            .slice(0, pageLength * pageNumber)
            .map((city, index) => (
              <CityCardAdvancedSearch
                key={index}
                city={city}
                image={dictionary[city]}
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
