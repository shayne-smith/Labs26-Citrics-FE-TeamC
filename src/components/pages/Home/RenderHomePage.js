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
  const [housing, setHousing] = useState([]);
  const [weather, setWeather] = useState([]);
  const [jobs, setJobs] = useState([]);

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

  const getCityData = () =>
    axios
      .get("https://citrics-c-api.herokuapp.com/cities")
      .then(res => {
        setCities(res.data);
      })
      .catch(err => console.log(err));

  const getHousingData = () =>
    axios
      .get(`${baseURL}/housing`)
      .then(res => {
        console.log(JSON.parse(res.data));
        setHousing(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

  const getJobsData = () =>
    axios
      .get(`${baseURL}/jobs`)
      .then(res => {
        console.log(JSON.parse(res.data));
        setJobs(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

  const getWeatherData = () =>
    axios
      .get(`${baseURL}/weather`)
      .then(res => {
        console.log(JSON.parse(res.data));
        setWeather(JSON.parse(res.data));
      })
      .catch(err => console.log(err));

  const addCity = key => {
    setComparisonList(oldArray => [...oldArray, key]);
  };
  // console.log(comparisonList)

  const removeCity = idx => {
    setComparisonList(
      comparisonList.filter((value, index) => {
        return idx !== index;
      })
    );
  };

  const calcHousingData = (cityStateName, stateCode) => {
    try {
      console.log("housing data: " + housing[stateCode][cityStateName]);
      return housing[stateCode][cityStateName];
    } catch {
      console.log("State and city housing data was not found!");
    }
  };

  const calcWeatherData = (cityStateName, stateCode) => {
    try {
      console.log(
        "weather data: " +
          weather[stateCode][cityStateName]["summer"]["FeelsLikeF"]
      );
      return weather[stateCode][cityStateName]["summer"]["FeelsLikeF"];
    } catch {
      console.log("State and city weather data was not found!");
    }
  };

  const calcJobsData = stateCode => {
    try {
      console.log("jobs data: " + jobs[stateCode]["Total Nonfarm"]);
      return jobs[stateCode]["Total Nonfarm"];
    } catch {
      console.log("State jobs data was not found!");
    }
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

  const getData = async str => {
    const s = str.charAt(str.length - 2) + str.charAt(str.length - 1);

    setComparisonList([
      ...comparisonList,
      {
        // this doesn't seem to be finding city image
        city: cities.find(city => (city.location = str)),
        housing: housing[s][str],
        weather: weather[s][str].summer.MaxTempF,
        jobs: jobs[s]["Total Manufacturing"]
      }
    ]);
    setIsComparing(true);
  };

  if (comparisonList.length <= 3) {
    return (
      <div>
        <Header />
        <Hero />
        <AutoComplete
          addCity={addCity}
          cities={cities}
          setComparisonList={setComparisonList}
          getData={getData}
        />

        {isComparing && (
          <div className="comparison-container">
            <div className="comparison">
              {comparisonList.map((data, index) => (
                <CardComparison
                  key={index}
                  removeCity={() => removeCity(index)}
                  showStats={showStats}
                  // housingData={calcHousingData(
                  //   city[0],
                  //   city[0].split(",")[1].trim()
                  // )}
                  // weatherData={calcWeatherData(
                  //   city[0],
                  //   city[0].split(",")[1].trim()
                  // ).toFixed(1)}
                  // jobsData={Math.round(
                  //   calcJobsData(city[0].split(",")[1].trim())
                  // )}
                  data={data}
                />
              ))}
            </div>
            <button className="compareButton">More Info</button>
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
