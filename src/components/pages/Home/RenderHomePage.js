import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Button, AutoComplete } from "antd";
import { Button } from "antd";
import CityCard from "../../common/CityCard.js";
import Header from "../../common/Header.js";
import Hero from "../../common/Hero.js";
import { AutoComplete } from "../../common/AutoComplete.js";

function RenderHomePage(props) {
  // const { userInfo, authService } = props;
  const { userInfo } = props;
  const [cities, setCities] = useState([]);
  const [isComparing, setIsComparing] = useState(false);
  const [comparisonList, setComparisonList] = useState([]);

  useEffect(() => {
    getCityData();
  }, []);

  const getCityData = () => {
    axios
      .get("https://citrics-c-api.herokuapp.com/cities")
      .then(res => {
        console.log(res.data);
        setCities(res.data);
      })
      .catch(err => console.log(err));
  };

  const addCity = key => {
    setComparisonList(oldArray => [...oldArray, key]);
  };

  return (
    <div>
      <Header />
      <Hero />
      <AutoComplete />
      {/* <h1>Hi {userInfo.name} Welcome to Labs Basic SPA</h1>
      <div>
        <p>
          This is an example of a common example of how we'd like for you to
          approach components.
        </p>
        <p>
          <Link to="/profile-list">Profiles Example</Link>
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
        <p>
          <Link to="/datavis">Data Visualizations Example</Link>
        </p>
        <p>
          <Button type="primary" onClick={() => authService.logout()}>
            Logout
          </Button>
        </p> */}
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
      {/* </div> */}
    </div>
  );
}
export default RenderHomePage;
