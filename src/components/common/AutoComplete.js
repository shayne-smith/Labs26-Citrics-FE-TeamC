import React, { useState, useContext, useEffect } from "react";
import { CityContext } from "../../contexts/CityContext";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

export const AutoComplete = () => {
  const { getData } = useContext(CityContext);

  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const res = await (
      await fetch(`https://citrics-c-api.herokuapp.com/cities?page=1&limit=700`)
    ).json();
    return res.data;
  };

  useEffect(() => {
    const fetchCities = async () => {
      const newCities = await fetchData();
      setOptions(newCities);
    };

    fetchCities();
  }, []);

  const handleSearch = e => {
    setSearch(e);
    setDisplay(false);
  };

  return (
    <div className="search">
      <div className="search-box">
        <input
          className="search-input"
          onChange={e => setSearch(e.target.value)}
          onClick={() => setDisplay(!display)}
          type="text"
          placeholder="Type to search"
          value={search}
        />
        <Link className="search-btn" to="#">
          <SearchOutlined />
        </Link>
      </div>
      {display && (
        <div className="grid">
          {options
            .filter(item => {
              return item.location.toLowerCase().indexOf(search) >= 0;
            })
            .slice(0, 5)
            .map((item, index) => {
              console.log(item.location);
              return (
                <div
                  className="result"
                  key={index}
                  onClick={() => {
                    getData(item.location, item.image);
                    handleSearch(item.location);
                  }}
                >
                  {item.location}
                </div>
              );
            })}
        </div>
      )}
      {/* {result.length !== 0 && (
        <div className="grid">
          {result.map((item, index) => {
            return (
              <div
                className="result"
                key={index}
                onClick={() => {
                  // getImage(item);
                  getData(item.location, item.image);
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      )} */}
    </div>
  );
};
