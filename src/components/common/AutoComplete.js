import React, { useState, useContext, useEffect, useRef } from "react";
import { CityContext } from "../../contexts/CityContext";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

export const AutoComplete = () => {
  const { getData } = useContext(CityContext);

  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");

  const searchContainer = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = e => {
    if (
      searchContainer.current &&
      !searchContainer.current.contains(e.target)
    ) {
      hideSuggestion();
    }
  };

  const hideSuggestion = () => setDisplay(false);

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
          onChange={e => {
            setDisplay(true);
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Type to search"
          value={search}
          ref={searchContainer}
        />
        <Link className="search-btn" to="#">
          <SearchOutlined />
        </Link>
      </div>
      {display && (
        <div className="option-container">
          {options
            .filter(item => {
              return item.location.toLowerCase().indexOf(search) >= 0;
            })
            .slice(0, 3)
            .map((item, index) => {
              return (
                <div
                  className="option"
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
    </div>
  );
};
