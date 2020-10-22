import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import styled from "styled-components";
import axios from "axios";

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function DataViz(props) {
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

  const { comparisonList } = props;

  useEffect(() => {
    const cityList = constructCityList(comparisonList);
    fetchGraphs(cityList);
  }, [comparisonList]);

  const constructCityList = list => {
    const cityList = [];
    list.map(city => {
      cityList.push(city.city);
    });
    return cityList;
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
    <ChartContainer>
      {props.showData.weather && (
        <Plot
          className="data-viz"
          data={tempData.data}
          layout={tempData.layout}
          config={{ displayModeBar: false }}
        />
      )}

      {props.showData.weather && (
        <Plot
          className="data-viz"
          data={precipData.data}
          layout={precipData.layout}
          config={{ displayModeBar: false }}
        />
      )}

      {props.showData.weather && (
        <Plot
          className="data-viz"
          data={snowData.data}
          layout={snowData.layout}
          config={{ displayModeBar: false }}
        />
      )}

      {props.showData.weather && (
        <Plot
          className="data-viz"
          data={uvindexData.data}
          layout={uvindexData.layout}
          config={{ displayModeBar: false }}
        />
      )}
      {props.showData.weather && (
        <Plot
          className="data-viz"
          data={humidityData.data}
          layout={humidityData.layout}
          config={{ displayModeBar: false }}
        />
      )}
      {props.showData.weather && (
        <Plot
          className="data-viz"
          data={windData.data}
          layout={windData.layout}
          config={{ displayModeBar: false }}
        />
      )}
      {/*housing*/}

      {props.showData.realEstate && (
        <Plot
          className="data-viz"
          data={housingData.data}
          layout={housingData.layout}
          config={{ displayModeBar: false }}
        />
      )}

      {/* Jobs */}

      {props.showData.jobs && (
        <Plot
          className="data-viz"
          data={goodsData.data}
          layout={goodsData.layout}
          config={{ displayModeBar: false }}
        />
      )}

      {props.showData.jobs && (
        <Plot
          className="data-viz"
          data={manufacturingData.data}
          layout={manufacturingData.layout}
          config={{ displayModeBar: false }}
        />
      )}
      {props.showData.jobs && (
        <Plot
          className="data-viz"
          data={constructionData.data}
          layout={constructionData.layout}
          config={{ displayModeBar: false }}
        />
      )}

      {props.showData.jobs && (
        <Plot
          className="data-viz"
          data={tradeTransportData.data}
          layout={tradeTransportData.layout}
          config={{ displayModeBar: false }}
        />
      )}
      {props.showData.jobs && (
        <Plot
          className="data-viz"
          data={financialData.data}
          layout={financialData.layout}
          config={{ displayModeBar: false }}
        />
      )}
      {props.showData.jobs && (
        <Plot
          className="data-viz"
          data={businessData.data}
          layout={businessData.layout}
          config={{ displayModeBar: false }}
        />
      )}
      {props.showData.jobs && (
        <Plot
          className="data-viz"
          data={eduHealthData.data}
          layout={eduHealthData.layout}
          config={{ displayModeBar: false }}
        />
      )}
      {props.showData.jobs && (
        <Plot
          className="data-viz"
          data={hospitalityData.data}
          layout={hospitalityData.layout}
          config={{ displayModeBar: false }}
        />
      )}
      {props.showData.jobs && (
        <Plot
          className="data-viz"
          data={informationData.data}
          layout={informationData.layout}
          config={{ displayModeBar: false }}
        />
      )}

      {props.showData.jobs && (
        <Plot
          className="data-viz"
          data={serviceData.data}
          layout={serviceData.layout}
          config={{ displayModeBar: false }}
        />
      )}

      {props.showData.jobs && (
        <Plot
          className="data-viz"
          data={miningData.data}
          layout={miningData.layout}
          config={{ displayModeBar: false }}
        />
      )}
      {props.showData.jobs && (
        <Plot
          className="data-viz"
          data={otherData.data}
          layout={otherData.layout}
          config={{ displayModeBar: false }}
        />
      )}
      {props.showData.jobs && (
        <Plot
          className="data-viz"
          data={unclassifiedData.data}
          layout={unclassifiedData.layout}
          config={{ displayModeBar: false }}
        />
      )}

      {props.showData.covid && (
        <Plot
          className="data-viz"
          data={covidData.data}
          layout={covidData.layout}
          config={{ displayModeBar: false }}
        />
      )}
    </ChartContainer>
  );
}

export default DataViz;
