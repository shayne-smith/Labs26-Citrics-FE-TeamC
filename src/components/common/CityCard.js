import React, { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

import { PlusCircleOutlined, FrownOutlined } from "@ant-design/icons";
//import CityCardModal from "./CityCardModal";

import { Modal, Button } from "react-bootstrap";

import TestComponent from "./TestComponent";
import WeatherIcon from "./WeatherIcon";

//cardComparison height from 150 to 250 px

const CardComparison = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  color: whitesmoke;
  width: 29%;
  height: 250px;
  min-width: 300px;
  margin: 1rem;
  border-radius: 3px;
  flex-grow: 1;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    transform: scale(1.02);
    transition-duration: 0.1s;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const CardHeader = styled.div`
  position: absolute;
  width: 30%;
  height: 15%;
  left: 0px;
  top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Amatic SC;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  font-size: 1.25vw;
  text-align: center;

  background: rgba(112, 199, 131, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:after {
    content: "";
    position: absolute;
    left: 100%;
    height: 0;
    width: 0;
    border-left: 11.5px solid rgba(112, 199, 131, 0.8);
    border-right: 11.5px solid transparent;
    border-bottom: 11.5px solid transparent;
    border-top: 11.5px solid transparent;
  }

  @media (max-width: 1106px) {
    font-size: 1.2rem;
    font-size: 1.5vw;
  }
  @media (max-width: 1000px) {
    font-size: 1.2rem;
    font-size: 1.75vw;
  }
  @media (max-width: 737px) {
    font-size: 1.2rem;
    font-size: 3vw;
  }
`;

const CardHeader2 = styled.div`
  position: relative;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
`;

const CardFooter = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 3px;
  background: rgba(112, 199, 131, 0.9);

  font-family: Amatic SC;
  font-style: normal;
  font-weight: bold;
  font-size: 1.1rem;
`;

function CityCard(props) {
  const {
    setIsComparing,
    getData,
    city,
    image,
    cities,
    weather,
    jobs,
    housing,
    covid
  } = props;
  const [modalShow, setModalShow] = React.useState(false);

  //console.log("CityCard Render");

  const avgHousePrice = () => {
    return housing[city.slice(-2)][city];
  };

  const feelsLike = season => {
    return Math.round(Number(weather[city.slice(-2)][city][season].FeelsLikeF));
  };

  return (
    <CardComparison
      style={{ background: `url(${image}) no-repeat center` }}
      onClick={() => setModalShow(true)}
    >
      {/* <CityCardModal
        image={image}
        show={modalShow}
        onHide={() => setModalShow(false)}
        cities={cities}
        cityName={city}

      /> */}

      <TestComponent
        image={image}
        show={modalShow}
        onHide={() => setModalShow(false)}
        cities={cities}
        cityName={city}
        weather={weather}
        housing={housing}
        jobs={jobs}
        covid={covid}
      />
      {/* <CardHeader>{city}</CardHeader> */}
      <CardHeader2>
        <Arrow style={{ position: "absolute", left: 0 }} />
        <div
          style={{
            position: "absolute",
            left: 10,
            top: -17,
            fontSize: "20px",
            width: 200,
            fontFamily: "Oswald, sans-serif"
          }}
        >
          {city}
        </div>
      </CardHeader2>

      <button
        className="plus-button"
        onClick={() => {
          setIsComparing(true);
          getData(city, image);
        }}
      >
        <PlusCircleOutlined className="plus-sign" />
      </button>
      <CardFooter>
        <div className="attributes">
          <span className="house-price">
            {housing[city.slice(-2)] !== undefined &&
            housing[city.slice(-2)][city] !== undefined ? (
              `1BR: $${avgHousePrice().slice(0, -2)}`
            ) : (
              <span
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center"
                }}
              >
                <FrownOutlined />
                <span style={{ marginLeft: "5px" }}>No Housing Data</span>
              </span>
            )}
          </span>

          <span className="bottom-right">
            {Object.entries(weather).length !== 0 ? (
              <WeatherIcon feelsLike={feelsLike} />
            ) : (
              "No Weather Data"
            )}
          </span>
        </div>
      </CardFooter>
    </CardComparison>
  );
}

export default CityCard;
