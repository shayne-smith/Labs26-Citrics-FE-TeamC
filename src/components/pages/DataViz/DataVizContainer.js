import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { CityContext } from "../../../contexts/CityContext";
import RenderDataViz from "./RenderDataViz";
import styled from "styled-components";

import Header from "../../common/Header";
import { ReactComponent as DriftlyLogo } from "../../../assets/driftlyLogo.svg";
import VizDrawer from "../../common/VizDrawer.js";

const Container = styled.div`
  display: flex;
`;
const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80%;
`;
const MenuWrapper = styled.div`
  background-color: #70c783;
  min-height: 100vh;
  width: 15%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const DataOptionsList = styled.div`
  margin-top: 6rem;
`;
const DataOption = styled.div`
  color: #ffffff;
  margin: 1rem 0;

  font-family: Amatic SC;
  font-style: normal;
  font-weight: bold;
  font-size: 2.5vw;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

function DataVizContainer() {
  const { comparisonList } = useContext(CityContext);
  const history = useHistory();

  const [showData, setShowData] = useState({
    weather: true,
    realEstate: false,
    jobs: false,
    covid: false
  });
  const [title, setTitle] = useState("");

  useEffect(() => {
    buildTitle();
  });

  const buildTitle = () => {
    let tempTitle = "";
    comparisonList.forEach(city => {
      tempTitle = tempTitle.concat(city.city, " -- ");
    });
    tempTitle = tempTitle.slice(0, -4);
    setTitle(tempTitle);
  };

  return (
    <Container>
      <MenuWrapper
        style={{
          position: "fixed"
        }}
      >
        <Link id="menuLogoWrapper" to="/">
          <DriftlyLogo id="menuLogo" onClick={() => history.push("/")} />
        </Link>
        <DataOptionsList>
          <DataOption
            onClick={() =>
              setShowData(showData => ({
                ...showData,
                weather: !showData.weather
              }))
            }
            style={showData.weather ? { opacity: "0.50" } : { color: "white" }}
          >
            WEATHER
          </DataOption>

          <DataOption
            onClick={() =>
              setShowData(showData => ({
                ...showData,
                realEstate: !showData.realEstate
              }))
            }
            style={
              showData.realEstate ? { opacity: "0.50" } : { color: "white" }
            }
          >
            Housing
          </DataOption>

          <DataOption
            onClick={() =>
              setShowData(showData => ({
                ...showData,
                jobs: !showData.jobs
              }))
            }
            style={showData.jobs ? { opacity: "0.50" } : { color: "white" }}
          >
            JOBS
          </DataOption>
          <DataOption
            onClick={() =>
              setShowData(showData => ({
                ...showData,
                covid: !showData.covid
              }))
            }
            style={showData.covid ? { opacity: "0.50" } : { color: "white" }}
          >
            COVID-19
          </DataOption>
        </DataOptionsList>
        <VizDrawer />
      </MenuWrapper>

      <DataWrapper>
        <Header />
        <h1 className="viz-title">{title}</h1>
        <RenderDataViz showData={showData} comparisonList={comparisonList} />
      </DataWrapper>
    </Container>
  );
}

export default DataVizContainer;
