import React, { useState } from "react";
import RenderDataViz from "./RenderDataViz";
import styled from "styled-components";

import Header from "../../common/Header";
import { ReactComponent as DriftlyLogo } from "../../../assets/driftlyLogo.svg";

const Container = styled.div`
  display: flex;
`;
const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
`;
const DataOptionsList = styled.div`
  margin-top: 3rem;
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

function DataVizContainer(props) {
  const [showData, setShowData] = useState({
    jobs: false,
    realEstate: true,
    weather: false
  });

  return (
    <Container>
      <MenuWrapper>
        <DriftlyLogo className="menuLogo" />
        <DataOptionsList>
          <DataOption
            onClick={() =>
              setShowData(showData => ({
                ...showData,
                jobs: !showData.jobs
              }))
            }
          >
            JOBS
          </DataOption>
          <DataOption
            onClick={() =>
              setShowData(showData => ({
                ...showData,
                realEstate: !showData.realEstate
              }))
            }
          >
            REAL ESTATE
          </DataOption>
          <DataOption
            onClick={() =>
              setShowData(showData => ({
                ...showData,
                weather: !showData.weather
              }))
            }
          >
            WEATHER
          </DataOption>
        </DataOptionsList>
      </MenuWrapper>
      <DataWrapper>
        <Header />
        <RenderDataViz showData={showData} />
      </DataWrapper>
    </Container>
  );
}

export default DataVizContainer;
