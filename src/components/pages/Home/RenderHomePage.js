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

function RenderHomePage(props) {
  // const { userInfo, authService } = props;
  const { userInfo } = props;
  const [cities, setCities] = useState([]);
  const [isComparing, setIsComparing] = useState(false);
  const [comparisonList, setComparisonList] = useState([]);

  useEffect(() => {
    getCityData();
    getHousingData();
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
        // console.log(res.data);
        setCities(res.data);
      })
      .catch(err => console.log(err));
  };

  const getHousingData = () => {
    axios
      .get(
        "http://driftly-ds-api.eba-pqp2r6up.us-east-2.elasticbeanstalk.com/housing"
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  const addCity = key => {
    console.log(key);
    setComparisonList(oldArray => [...oldArray, key]);
  };

  const removeCity = elem => {
    setComparisonList(
      comparisonList.filter(value => {
        return value[0] !== elem[0];
      })
    );
  };

  const getVizData = () => {
    axios
      .get()
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  if (comparisonList.length <= 3) {
    return (
      <div>
        <Header />
        <Hero />
        <AutoComplete addCity={addCity} />

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
                />
              ))}
            </div>
            <button className="compareButton" onClick={getVizData}>
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

  return (
    <div>
      <Header />
      <Hero />
      <AutoComplete addCity={addCity} />
      <ComparisonViz />
      <div className="container">
        {cities.map((city, index) => (
          <CityCard
            key={index}
            city={city.location}
            state={city[1]}
            image={city.image}
            index={index}
            setIsComparing={setIsComparing}
            addCity={addCity}
          />
        ))}
      </div>
    </div>
  );
}
export default RenderHomePage;
