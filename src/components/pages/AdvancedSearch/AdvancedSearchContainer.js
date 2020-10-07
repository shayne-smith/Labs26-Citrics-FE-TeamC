import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { CityContext } from "../../../contexts/CityContext";
import styled from "styled-components";

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
    suggestions
  } = useContext(CityContext);
  const history = useHistory();

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
          {}Showing 20 of {suggestions.length} results
        </div>
        <div className="card-container">
          {cities.slice(30).map((city, index) => (
            <CityCard
              key={index}
              city={city.location}
              image={city.image}
              index={index}
              setIsComparing={setIsComparing}
              addCity={addCity}
              getData={getData}
              cities={cities}
              weather={weather}
            />
          ))}
        </div>
      </ResultsWrapper>
    </Container>
  );
};

export default AdvancedSearch;
