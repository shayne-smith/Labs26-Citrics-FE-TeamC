import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { PlusCircleOutlined, FrownOutlined } from "@ant-design/icons";
import ModalViz from "./ModalViz";
import WeatherIcon from "./WeatherIcon";

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
  const { setIsComparing, getData, city, image, weather, housing } = props;
  const [modalShow, setModalShow] = useState(false);
  const [covidData, setCovidData] = useState({});
  const [tempData, setTempData] = useState({});
  const [precipData, setPrecipData] = useState({});
  const [snowData, setSnowData] = useState({});
  const [uvindexData, setUvindexData] = useState({});
  const [humidityData, setHumidityData] = useState({});
  const [windData, setWindData] = useState({});
  const [housingData, setHousingData] = useState({});

  const [goodsData, setGoodsData] = useState({});
  const [miningData, setMiningData] = useState({});
  const [manufacturingData, setManufacturingData] = useState({});
  const [constructionData, setConstructionData] = useState({});
  const [tradeTransportData, setTradeTransportData] = useState({});
  const [financialData, setFinancialData] = useState({});
  const [businessData, setBusinessData] = useState({});
  const [eduHealthData, setEduHealthData] = useState({});
  const [hospitalityData, setHospitalityData] = useState({});
  const [informationData, setInformationData] = useState({});
  const [serviceData, setServiceData] = useState({});
  const [otherData, setOtherData] = useState({});
  const [unclassifiedData, setUnclassifiedData] = useState({});

  const avgHousePrice = () => {
    return housing[city.slice(-2)][city];
  };

  const feelsLike = season => {
    return Math.round(Number(weather[city.slice(-2)][city][season].FeelsLikeF));
  };

  const fetchGraphs = cityList => {
    axios
      .post("https://c-ds-driftly.citrics.dev/covid_viz/", cityList)
      .then(res => {
        setCovidData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

    axios
      .post("https://c-ds-driftly.citrics.dev/temp_viz/", cityList)
      .then(res => {
        setTempData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

    axios
      .post("https://c-ds-driftly.citrics.dev/precip_viz/", cityList)
      .then(res => {
        setPrecipData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

    axios
      .post("https://c-ds-driftly.citrics.dev/snow_viz/", cityList)
      .then(res => {
        setSnowData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

    axios
      .post("https://c-ds-driftly.citrics.dev/uvindex_viz/", cityList)
      .then(res => {
        setUvindexData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

    axios
      .post("https://c-ds-driftly.citrics.dev/humidity_viz/", cityList)
      .then(res => {
        setHumidityData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

    axios
      .post("https://c-ds-driftly.citrics.dev/wind_viz/", cityList)
      .then(res => {
        setWindData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

    axios
      .post("https://c-ds-driftly.citrics.dev/housing_viz/", cityList)
      .then(res => {
        setHousingData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

    axios
      .post("https://c-ds-driftly.citrics.dev/wage_goods_viz/", cityList)
      .then(res => {
        setGoodsData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));
    axios
      .post("https://c-ds-driftly.citrics.dev/wage_mining_viz/", cityList)
      .then(res => {
        setMiningData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

    axios
      .post(
        "https://c-ds-driftly.citrics.dev/wage_manufacturing_viz/",
        cityList
      )
      .then(res => {
        setManufacturingData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));
    axios
      .post("https://c-ds-driftly.citrics.dev/wage_construction_viz/", cityList)
      .then(res => {
        setConstructionData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

    axios
      .post(
        "https://c-ds-driftly.citrics.dev/wage_trade_transport_viz/",
        cityList
      )
      .then(res => {
        setTradeTransportData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

    axios
      .post("https://c-ds-driftly.citrics.dev/wage_financial_viz/", cityList)
      .then(res => {
        setFinancialData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

    axios
      .post("https://c-ds-driftly.citrics.dev/wage_business_viz/", cityList)
      .then(res => {
        setBusinessData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

    axios
      .post("https://c-ds-driftly.citrics.dev/wage_edu_health_viz/", cityList)
      .then(res => {
        setEduHealthData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

    axios
      .post("https://c-ds-driftly.citrics.dev/wage_hospitality_viz/", cityList)
      .then(res => {
        setHospitalityData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

    axios
      .post("https://c-ds-driftly.citrics.dev/wage_information_viz/", cityList)
      .then(res => {
        setInformationData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

    axios
      .post("https://c-ds-driftly.citrics.dev/wage_service_viz/", cityList)
      .then(res => {
        setServiceData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

    axios
      .post("https://c-ds-driftly.citrics.dev/wage_other_viz/", cityList)
      .then(res => {
        setOtherData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

    axios
      .post("https://c-ds-driftly.citrics.dev/wage_unclassified_viz/", cityList)
      .then(res => {
        setUnclassifiedData(JSON.parse(res.data));
      })
      .catch(err => console.log(err));
  };

  return (
    <CardComparison
      className="advanced-search-city-card"
      style={{ background: `url(${image}) no-repeat center` }}
      onClick={() => {
        setModalShow(true);
        fetchGraphs([city]);
      }}
    >
      <ModalViz
        image={image}
        show={modalShow}
        onHide={() => setModalShow(false)}
        covidData={covidData}
        tempData={tempData}
        precipData={precipData}
        snowData={snowData}
        uvindexData={uvindexData}
        humidityData={humidityData}
        windData={windData}
        housingData={housingData}
        goodsData={goodsData}
        manufacturingData={manufacturingData}
        miningData={miningData}
        constructionData={constructionData}
        tradeTransportData={tradeTransportData}
        financialData={financialData}
        businessData={businessData}
        eduHealthData={eduHealthData}
        hospitalityData={hospitalityData}
        informationData={informationData}
        serviceData={serviceData}
        otherData={otherData}
        unclassifiedData={unclassifiedData}
      />

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
