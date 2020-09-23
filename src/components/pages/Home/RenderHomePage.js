import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Button, AutoComplete } from "antd";
import { Button } from "antd";
import CityCard from "../../common/CityCard.js";
import CardComparison from "../../common/CardComparison.js";
import Header from "../../common/Header.js";
import Hero from "../../common/Hero.js";
import { AutoComplete } from "../../common/AutoComplete.js";
import ComparisonViz from "../../common/ComparisonViz.js";
import StatCard from "../../common/StatCard.js";

function RenderHomePage(props) {
  // const { userInfo, authService } = props;
  const { userInfo } = props;
  const [cities, setCities] = useState([]);
  const [isComparing, setIsComparing] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [comparisonList, setComparisonList] = useState([]);
  const [housing, setHousing] = useState({});
  const [weather, setWeather] = useState({});
  const [jobs, setJobs] = useState({});

  const baseURL =
    "http://driftly-ds-api.eba-pqp2r6up.us-east-2.elasticbeanstalk.com";

  useEffect(() => {
    getCityData();
    getHousingData();
    getWeatherData();
    getJobsData();
  }, []);

  useEffect(() => {
    checkComparisonListLength();
  }, [comparisonList]);

  const checkComparisonListLength = () => {
    if (comparisonList.length == 0) {
      setIsComparing(false);
    }
  };

  const getCityData = () => {
    axios
      .get("https://citrics-c-api.herokuapp.com/cities")
      .then(res => {
        setCities(res.data);
      })
      .catch(err => console.log(err));
  };

  const getHousingData = () => {
    axios
      .get(`${baseURL}/housing`)
      .then(res => {
        console.log(res.data);
        setHousing(JSON.parse(res.data));
      })
      .catch(err => console.log(err));
  };

  const getJobsData = () => {
    axios
      .get(`${baseURL}/jobs`)
      .then(res => {
        console.log(res.data);
        setJobs(JSON.parse(res.data));
      })
      .catch(err => console.log(err));
  };

  const getWeatherData = () => {
    axios
      .get(`${baseURL}/weather`)
      .then(res => {
        console.log(res.data);
        setWeather(JSON.parse(res.data));
      })
      .catch(err => console.log(err));
  };

  const addCity = key => {
    setComparisonList(oldArray => [...oldArray, key]);
  };

  const removeCity = elem => {
    setComparisonList(
      comparisonList.filter(value => {
        return value[0] !== elem[0];
      })
    );
  };

  const calcHousingData = (cityName, stateCode) => {
    console.log(housing[stateCode][cityName]);
  };

  const getVizData = () => {
    axios
      .post(`${baseURL}/card_viz`, [
        "Albany, NY",
        "San Francisco, CA",
        "Chicago, IL"
      ])
      .then(res => {
        console.log(JSON.parse(res.data)["CA"]);
      })
      .catch(err => console.log(err));
  };

  if (comparisonList.length <= 3) {
    return (
      <div>
        <Header />
        <Hero />
        <AutoComplete addCity={addCity} cities={cities} />

        {isComparing && (
          <div className="comparison-container">
            <div className="comparison">
              {comparisonList.map((city, index) => (
                <CardComparison
                  key={index}
                  city={city[0]}
                  image={city[1]}
                  index={index}
                  removeCity={removeCity}
                  showStats={showStats}
                  // housingData={}
                  // weatherData={}
                  // jobsData={}
                />
              ))}
            </div>
            <button
              className="compareButton"
              onClick={() => {
                // getHousingData();
                // getWeatherData();
                // getJobsData();
                setShowStats(true);
              }}
            >
              Compare Cities
            </button>
          </div>
        )}

        <div className="container">
          {cities.map((city, index) => (
            <CityCard
              key={index}
              city={city.location}
              image={city.image}
              index={index}
              setIsComparing={setIsComparing}
              addCity={addCity}
            />
          ))}
        </div>
      </div>
    );
  } else if (comparisonList.length > 3) {
    alert("Can only compare at most 3 cities!");
  }
}
export default RenderHomePage;
